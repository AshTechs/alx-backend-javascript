const fs = require('fs').promises;

/**
 * Reads and parses the database file.
 * @param {string} path - The path to the database CSV file.
 * @returns {Promise<Object>} - A promise that resolves to an object where keys are fields and values are arrays of student first names.
 */
async function readDatabase(path) {
    try {
        const data = await fs.readFile(path, 'utf8');

        const lines = data.trim().split('\n').filter(line => line);

        if (lines.length === 0) {
            return {};
        }

        lines.shift();

        const studentsByField = {};

        lines.forEach((line) => {
            const student = line.split(',');
            const firstName = student[0];
            const field = student[3];

            if (!studentsByField[field]) {
                studentsByField[field] = [];
            }

            studentsByField[field].push(firstName);
        });

        return studentsByField;

    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = readDatabase;

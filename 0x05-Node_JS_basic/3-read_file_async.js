const fs = require('fs').promises;

/**
 * Reads and parses the CSV file to count students by field.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<string>} A promise that resolves to a string with student counts and lists.
 * @throws {Error} If the file cannot be loaded or parsed.
 */
async function countStudents(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.trim().split('\n').filter(line => line.length > 0);

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        const headers = lines.shift().split(',');
        const fieldIndex = headers.indexOf('field');
        if (fieldIndex === -1) {
            throw new Error('Invalid file format');
        }

        const studentsByField = {};

        lines.forEach((line) => {
            const [firstName, , , field] = line.split(',');
            if (!studentsByField[field]) {
                studentsByField[field] = [];
            }
            studentsByField[field].push(firstName);
        });

        let result = `Number of students: ${lines.length}\n`;
        for (const [field, students] of Object.entries(studentsByField)) {
            result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }

        return result.trim();
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = { countStudents };

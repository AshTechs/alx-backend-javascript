const fs = require('fs').promises;

/**
 * Reads and processes the CSV file to count students by field.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise<void>} A promise that resolves when the processing is complete.
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
            throw new Error('Cannot find the field column');
        }

        const studentsByField = {};
        lines.forEach(line => {
            const [firstName, , , field] = line.split(',');
            if (field) {
                if (!studentsByField[field]) {
                    studentsByField[field] = [];
                }
                studentsByField[field].push(firstName);
            }
        });

        let output = `Number of students: ${lines.length}\n`;
        for (const [field, students] of Object.entries(studentsByField)) {
            output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        }

        console.log(output.trim());
    } catch (error) {
        console.error('Cannot load the database');
    }
}

module.exports = { countStudents };

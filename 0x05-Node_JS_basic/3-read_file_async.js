const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line);
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }
    lines.shift();
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

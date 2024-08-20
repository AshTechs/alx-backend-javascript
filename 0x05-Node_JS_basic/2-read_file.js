const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.trim().split('\n').filter((line) => line);

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
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

    console.log(`Number of students: ${lines.length}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');

    const lines = data.trim().split('\n').filter((line) => line);

    if (lines.length === 0) {
      return 'Cannot load the database';
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

    let result = `Number of students: ${lines.length}\n`;
    for (const [field, students] of Object.entries(studentsByField)) {
      result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    return result;
  } catch (error) {
    return 'Cannot load the database';
  }
}

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dbPath = process.argv[2];
  const studentsInfo = await countStudents(dbPath);
  res.send(`This is the list of our students\n${studentsInfo}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;

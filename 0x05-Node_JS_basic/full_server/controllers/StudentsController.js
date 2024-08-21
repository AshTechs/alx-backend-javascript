const readDatabase = require('../utils');

class StudentsController {
  /**
   * Handles the request to get all students.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getAllStudents(req, res) {
    const dbPath = process.argv[2];

    try {
      const studentsByField = await readDatabase(dbPath);

      let result = 'This is the list of our students\n';
      const fields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      for (const field of fields) {
        const students = studentsByField[field];
        result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      res.status(200).send(result);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  /**
   * Handles the request to get students by major.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   */
  static async getAllStudentsByMajor(req, res) {
    const dbPath = process.argv[2];
    const { major } = req.query;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsByField = await readDatabase(dbPath);

      if (!studentsByField[major]) {
        return res.status(500).send('Cannot load the database');
      }

      const students = studentsByField[major];
      const result = `List: ${students.join(', ')}`;
      
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;

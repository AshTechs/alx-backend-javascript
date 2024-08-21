import readDatabase from '../utils';

class StudentsController {
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(process.argv[2]);
      const studentsList = students[major];

      if (!studentsList) {
        return res.status(500).send('Cannot load the database');
      }

      res.status(200).send(`List: ${studentsList.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;

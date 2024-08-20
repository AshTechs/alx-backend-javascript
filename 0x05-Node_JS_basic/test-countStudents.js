const { countStudents } = require('./3-read_file_async');

(async () => {
  try {
    const result = await countStudents('database.csv');
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
})();

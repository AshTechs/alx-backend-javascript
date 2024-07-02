import getListStudents from './0-get_list_students.js';
import getStudentIdsSum from './3-get_ids_sum.js';

function calculateStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return 0;
  }

  return getStudentIdsSum(students);
}

const students = getListStudents();
const sum = calculateStudentIdsSum(students);

console.log(sum);

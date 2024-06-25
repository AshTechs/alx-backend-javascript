export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  function* iterator() {
    while (currentDeptIndex < departments.length) {
      const department = departments[currentDeptIndex];
      const employees = report.allEmployees[department];

      yield employees[currentEmployeeIndex];

      currentEmployeeIndex += 1;
      if (currentEmployeeIndex >= employees.length) {
        currentDeptIndex += 1;
        currentEmployeeIndex = 0;
      }
    }
  }

  return {
    [Symbol.iterator]: iterator,
  };
}

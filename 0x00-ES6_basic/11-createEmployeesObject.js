export default function createEmployeesObject(departmentName, employees) {
  const employeesObject = {
    [departmentName]: employees, // Added trailing comma here
  };

  return employeesObject;
}

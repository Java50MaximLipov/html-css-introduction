function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel-Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Arad", "Israel")
]

//  HW-18
function getEmployee(employees, id) {
    return employees.find((obj) => obj.id === id);
}
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    return employees.filter((obj) => obj.salary >= salaryFrom && obj.salary <= salaryTo);
}
function getEmployeesByCity(employees, city) {
    return employees.filter((obj) => obj.address.city === city);
}
function getEmployeeNames(employees) {
    return employees.map((obj) => obj.name);
}
function sortEmployeesByAge(employees) {
    return employees.sort((objA, objB) => objA.birthYear - objB.birthYear);
}
function computeSalaryBudget(employees) {
    return employees.reduce((res, obj) => res + obj.salary, 0);
}

//  tests
console.log(getEmployee(employees,129));
console.log(getEmployeesBySalary(employees,10000,15000));
console.log(getEmployeesByCity(employees,"London"));
console.log(getEmployeeNames(employees));
console.log(sortEmployeesByAge(employees));
console.log(computeSalaryBudget(employees));


// HW-21

class Employee {
    constructor(id, name, birthYear, salary, city, country) {
        this.id = id;
        this.name = name;
        this.birthYear = birthYear;
        this.salary = salary;
        this.address = { city, country };
    }
}

class Company {
    //object key: <id value>, value: reference to Employee object.
    constructor() {
        this.employees = {};
    }
    addEmployee(empl) {
        //adds empl into #employees object
        //returns true if added new employee object
        //returns false if employee with a given id value already exists
        let isExists = false;
        if (!this.employees[empl.id]) {
            this.employees[empl.id] = empl;
            isExists = true;
        }
        return isExists;
    }
    removeEmployee(id) {
        //removes employee with a given id from #employees object
        //returns true if removed
        //returns false if employee with the id doesn't exist
        let isExists = false;
        if (this.employees[id]) {
            delete this.employees[id];
            isExists = true;
        }
        return isExists;
    }
    getEmployeesCountry(country) {
        //returns array of employee objects having field "country" equaled to a given country
        // const result = Object.values(this.employees).filter(empl => empl.address.country === country);
        // return (result) ? result : false;
        return Object.values(this.employees).filter(empl => empl.address.country === country);
    }
    getEmployeesByAge(age) {
        //returns array of employee objects with a given age
        const currentYear = new Date().getFullYear();
        // const result = Object.values(this.employees).filter(empl => age === (currentYear - empl.birthYear));
        // return (result) ? result : false;
        return Object.values(this.employees).filter(empl => age === (currentYear - empl.birthYear));
    }
    getEmployeesBySalaries(salaryFrom, salaryTo) {
        //returns array of employee objects with salary in a given closed range [salaryFrom, salaryTo]
        //if salaryFrom < 0, then get employees with salary less or equal salaryTo
        //if salaryTo , 0, then get employees with salary greater or equal salaryFrom
        //if salaryFrom < 0 && salaryTo < 0, then get all employees
        const employeesArray = Object.values(this.employees);
        let result = [];
        if (salaryFrom < 0 && salaryTo < 0) {
            result = employeesArray;
        } else if (salaryFrom < 0) {
            result = employeesArray.filter((empl) => empl.salary <= salaryTo);
        } else if (salaryTo < 0) {
            result = employeesArray.filter((empl) => empl.salary >= salaryFrom);
        } else {
            result = employeesArray.filter((empl) => empl.salary >= salaryFrom && empl.salary <= salaryTo);
        }
        return result;
    }
}

//Test the addEmployee method:
let company = new Company();
let employee1 = new Employee(1, "Vasya", 2000, 15000, "Lod", "Israel");
let employee2 = new Employee(2, "David", 1975, 15500, "Tel Aviv", "Israel");
let employee3 = new Employee(3, "Sara", 1985, 20000, "New York", "USA");
let employee4 = new Employee(4, "Abraham", 1990, 13000, "London", "UK");
let employee5 = new Employee(5, "Moshe", 2000, 15000, "Rehovot", "Israel");
let employee6 = new Employee(6, "Goga", 1993, 10000, "Tbilisi", "Gorgia");
let employee7 = new Employee(7, "Sasha", 2000, 25000, "Ramat Gan", "Israel");
let employee8 = new Employee(8, "Victor", 2003, 10000, "Arad", "Israel");
console.log(`Add Test: ${company.addEmployee(employee1)} ; expected output: true`);
console.log(`Add Test: ${company.addEmployee(employee1)} ; expected output: false`);

//Test the removeEmployee method:
company = new Company();
employee1 = new Employee(1, "Vasya", 2000, 15000, "Lod", "Israel");
employee2 = new Employee(2, "David", 1975, 15500, "Tel Aviv", "Israel");
employee3 = new Employee(3, "Sara", 1985, 20000, "New York", "USA");
employee4 = new Employee(4, "Abraham", 1990, 13000, "London", "UK");
employee5 = new Employee(5, "Moshe", 2000, 15000, "Rehovot", "Israel");
employee6 = new Employee(6, "Goga", 1993, 10000, "Tbilisi", "Gorgia");
employee7 = new Employee(7, "Sasha", 2000, 25000, "Ramat Gan", "Israel");
employee8 = new Employee(8, "Victor", 2003, 10000, "Arad", "Israel");
console.log(`Remove Test: ${company.addEmployee(employee1)} ; expected output: true`);
console.log(`Remove Test: ${company.removeEmployee(1)} ; expected output: true`);
console.log(`Remove Test: ${company.removeEmployee(9)} ; expected output: false`);

//Test the getEmployeesCountry method:
company = new Company();
employee1 = new Employee(1, "Vasya", 2000, 15000, "Lod", "Israel");
employee2 = new Employee(2, "David", 1975, 15500, "Tel Aviv", "Israel");
employee3 = new Employee(3, "Sara", 1985, 20000, "New York", "USA");
employee4 = new Employee(4, "Abraham", 1990, 13000, "London", "UK");
employee5 = new Employee(5, "Moshe", 2000, 15000, "Rehovot", "Israel");
employee6 = new Employee(6, "Goga", 1993, 10000, "Tbilisi", "Gorgia");
employee7 = new Employee(7, "Sasha", 2000, 25000, "Ramat Gan", "Israel");
employee8 = new Employee(8, "Victor", 2003, 10000, "Arad", "Israel");
company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(employee3);
company.addEmployee(employee4);
company.addEmployee(employee5);
company.addEmployee(employee6);
company.addEmployee(employee7);
company.addEmployee(employee8);
console.log(`Country Test: ${company.getEmployeesCountry("Israel")} ; expected output: 5 objects array`);
console.log(`Country Test: ${company.getEmployeesCountry("France")} ; expected output: 0 objects array`);

//Test the getEmployeesByAge method:
company = new Company();
employee1 = new Employee(1, "Vasya", 2000, 15000, "Lod", "Israel");
employee2 = new Employee(2, "David", 1975, 15500, "Tel Aviv", "Israel");
employee3 = new Employee(3, "Sara", 1985, 20000, "New York", "USA");
employee4 = new Employee(4, "Abraham", 1990, 13000, "London", "UK");
employee5 = new Employee(5, "Moshe", 2000, 15000, "Rehovot", "Israel");
employee6 = new Employee(6, "Goga", 1993, 10000, "Tbilisi", "Gorgia");
employee7 = new Employee(7, "Sasha", 2000, 25000, "Ramat Gan", "Israel");
employee8 = new Employee(8, "Victor", 2003, 10000, "Arad", "Israel");
company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(employee3);
company.addEmployee(employee4);
company.addEmployee(employee5);
company.addEmployee(employee6);
company.addEmployee(employee7);
company.addEmployee(employee8);
console.log(`Age Test: ${company.getEmployeesByAge(23)} ; expected output: 3 objects array`);
console.log(`Age Test: ${company.getEmployeesByAge(12)} ; expected output: 0 objects array`);

//Test the getEmployeesBySalaries method:
company = new Company();
employee1 = new Employee(1, "Vasya", 2000, 15000, "Lod", "Israel");
employee2 = new Employee(2, "David", 1975, 15500, "Tel Aviv", "Israel");
employee3 = new Employee(3, "Sara", 1985, 20000, "New York", "USA");
employee4 = new Employee(4, "Abraham", 1990, 13000, "London", "UK");
employee5 = new Employee(5, "Moshe", 2000, 15000, "Rehovot", "Israel");
employee6 = new Employee(6, "Goga", 1993, 10000, "Tbilisi", "Gorgia");
employee7 = new Employee(7, "Sasha", 2000, 25000, "Ramat Gan", "Israel");
employee8 = new Employee(8, "Victor", 2003, 10000, "Arad", "Israel");
company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(employee3);
company.addEmployee(employee4);
company.addEmployee(employee5);
company.addEmployee(employee6);
company.addEmployee(employee7);
company.addEmployee(employee8);
console.log(`Salary Test: ${company.getEmployeesBySalaries(15000, 20000)} ; expected output: 4 objects array`);
console.log(`Salary Test: ${company.getEmployeesBySalaries(-1, 20000)} ; expected output: 7 objects array`);
console.log(`Salary Test: ${company.getEmployeesBySalaries(15000, -1)} ; expected output: 4 objects array`);
console.log(`Salary Test: ${company.getEmployeesBySalaries(-1, -1)} ; expected output: 8 objects array`);
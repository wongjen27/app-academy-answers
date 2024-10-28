class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
    };

    displayInfo() {
        console.log(`${this.name}, Title: ${this.title}, Salary: $${this.salary}, Manager: ${this.manager ? this.manager.name : 'None'}`);
    }

}

module.exports = Employee;

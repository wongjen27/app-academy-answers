class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if(this.manager) {
            this.manager.addEmployee(this)
           }
    };



    displayInfo() {
        console.log(`${this.name}, Title: ${this.title}, Salary: $${this.salary}, Manager: ${this.manager ? this.manager.name : 'None'}`);
    }

}



module.exports = Employee;

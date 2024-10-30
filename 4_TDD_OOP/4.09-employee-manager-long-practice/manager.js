const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager = null) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }

    displayEmployees() {
        if (this.employees.length === 0) {
            console.log(`${this.name} manages no employees.`);
        } else {
            console.log(`${this.name} manages the following employees:`);
            this.employees.forEach(emp => {
                console.log(`- ${emp.name}, Title: ${emp.title}`);
            });
        }
    }
};

const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

console.log('After: ', splinter);


/****/

module.exports = Manager;

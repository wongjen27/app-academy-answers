const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager = null) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }

    calculateBonus(multiplier) {
        let totalSalary = this.salary;

        totalSalary = totalSalary + this._totalSubSalary(this.employees);

        const bonus = totalSalary * multiplier

        return bonus;

    }

    _totalSubSalary(arr) {
        let sum = 0;

        for (let employee of arr) {
            if (employee instanceof Manager) {
                sum  += employee.salary + employee._totalSubSalary(employee.employees);
            } else {
                sum += employee.salary
            }
        }
        return sum;
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
    };
}




const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000

hobbes = new Manager('Hobbes', 1000000, 'Founder');
calvin = new Manager('Calvin', 130000, 'Director', hobbes);
susie = new Manager('Susie', 100000, 'TA Manager', calvin);
lily = new Employee('Lily',90000, 'TA', susie);
clifford = new Employee('clifford', 90000, 'TA', susie);
lily.calculateBonus(0.05)

// console.log(raph.employees)

// console.log(splinter.displayEmployees())


/****/

module.exports = Manager;

class Member {
    constructor(name, salary, title) {
        this.name = name;
        this.salary = salary;
        this.title = title
    }

    displayInfo() {
        console.log(`name: ${this.name}, salary: ${this.salary}, title: ${this.title}`)
    }
}


class TeamLead extends Member {
    constructor(name, salary, title) {
        super(name, salary, title);
        this.members = []
    }

    addTeamMember(member) {
        this.members.push(member)
    }

    calculateBudget() {
        let totalBudget = this.salary;

        totalBudget += this._totalSubBudget(this.members)

        return totalBudget
    }

    _totalSubBudget(arr) {
        let sum = 0;
        for (let member of arr) {
            if (member instanceof TeamLead) {
                sum += member.salary + member._totalSubBudget(member.members)
            } else {
                sum += member.salary
                return sum
            }
        }
        return sum
    }
}


const alice = new TeamLead('Alice', 95000, 'Project Manager');
const bob = new TeamLead('Bob', 85000, 'Technical Lead', alice);
const charlie = new Member('Charlie', 70000, 'Developer', bob);
const diana = new Member('Diana', 60000, 'Developer', bob);
const edward = new Member('Edward', 65000, 'Designer', alice);

// Adding team members
bob.addTeamMember(charlie);
bob.addTeamMember(diana);
alice.addTeamMember(bob);



console.log(`Alice's total budget: $${alice.calculateBudget()}`); // Should include Alice's salary and Bob's team budget
console.log(`Bob's total budget: $${bob.calculateBudget()}`);     // Should include Bob's salary and Charlie's and Diana's salaries

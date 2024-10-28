const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    let sum = 0;
    teachers.forEach(element => {
      sum = sum + element.yearsOfExperience
    });
    return sum
  }
}

const teacher1 = new Teacher('Alice', 'Smith', 25, 'Mathematics', 5);
const teacher2 = new Teacher('Bob', 'Johnson', 22, 'Physics', 6);

let HSteachers = [teacher1, teacher2]

console.log(Teacher.combinedYearsOfExperience(HSteachers))

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}

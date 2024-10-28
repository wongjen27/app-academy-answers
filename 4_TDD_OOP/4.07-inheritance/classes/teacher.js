const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, age, subject, yearsOfExperience) {
    super(firstName, lastName, age);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static yearsOfExperience(teachers) {
    total = teachers.reduce((sum, element) => sum + element.yearsOfExperience, 0)
    return total
  }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}

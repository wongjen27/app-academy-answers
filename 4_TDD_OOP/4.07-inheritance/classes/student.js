const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    if (student1.GPA > student2.GPA) {
      return `${student1.firstName} ${student1.lastName} has the higher GPA.`
    } else if (student1.GPA < student2.GPA) {
      return `${student2.firstName} ${student2.lastName} has the higher GPA.`
    } else if (student2.GPA === student1.GPA) {
      return "Both students have the same GPA"
    }
  }
}


const student1 = new Student('Alice', 'Smith', 25, 'Mathematics', 4.5);
const student2 = new Student('Bob', 'Johnson', 22, 'Physics', 4.2);

console.log(Student.compareGPA(student1, student2));

console.log(student1.major); // Outputs: 'Mathematics'
console.log(student1.GPA);   // Outputs: 3.8


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}

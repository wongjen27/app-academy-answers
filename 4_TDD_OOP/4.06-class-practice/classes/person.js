// Your code here

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }
  static introducePeople(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("introducePeople only takes an array as an argument.")
    }
    for (const element of arr) {
      if(!(element instanceof Person)) {
        throw new Error("All items in array must be Person class instances.");
      }
    }
    arr.forEach(element => {
      element.introduce()
    });

    }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}

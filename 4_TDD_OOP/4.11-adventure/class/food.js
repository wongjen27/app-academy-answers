
// FILL THIS OUT

const { Item } = require('./item');

class Food extends Item {
  constructor (name, description, room, isFood = true) {
    super(name, description, room)
    this.isFood = isFood;
  }
}

module.exports = {
  Food,
};

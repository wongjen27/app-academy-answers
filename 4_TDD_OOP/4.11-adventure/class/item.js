class Item {

    constructor(name, color, size) {
      this.name = name;
      this.color = color;
      this.size = size;
    }

}

const knife = new Item('knife', 'black', 'small')

module.exports = {
  Item,
};

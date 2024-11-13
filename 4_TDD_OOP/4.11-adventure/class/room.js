
const { Food } = require('./food');

class Room {

    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.exits = {};
        this.items = [];
    }

    printRoom() {
        console.clear();
        console.log("");
        console.log(this.name);
        console.log("");
        console.log(this.description);
        console.log("");
        if (this.items.length > 0) {
            console.log("Items in this room:");
            this.items.forEach(item => {
                if (item instanceof Food) {
                    console.log(`- ${item.name}`);
                } else {
                    console.log(`- ${item.name}`);
                }
            });
        } else {
            console.log("There are no items here.");
        }
        console.log(this.getExitsString());
        console.log("");
    }

    getExits() {
        return Object.keys(this.exits);
    }

    getExitsString() {
        return `Exits: ${this.getExits().join(", ")}`
    }

    connectRooms(direction, connectingRoom) {

        // Check if the direction and connecting room are valid
        if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
            throw new Error("Error: Invalid room connection");
        }

        this.exits[direction] = connectingRoom;
    }

    getRoomInDirection(direction) {
        return this.exits[direction];
    }

    getItemByName(name) {

        return this.items.find(item => item.name.toLowerCase() === name.toLowerCase());
    }

}

module.exports = {
  Room,
};

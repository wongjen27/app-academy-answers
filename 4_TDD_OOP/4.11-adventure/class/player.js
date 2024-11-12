class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        const item = this.currentRoom.getItemByName(itemName);

        if (item) {
            // Add the item to the player's inventory
            this.items.push(item);

            // Remove the item from the room's items array
            const itemIndex = this.currentRoom.items.indexOf(item);
            if (itemIndex > -1) {
                this.currentRoom.items.splice(itemIndex, 1);
            }

            console.log(`${this.name} has picked up: ${item.name}`);
        } else {
            console.log("Item not found in this room.");
        }

    }

    dropItem(itemName) {
        const item = this.getItemByName(itemName);

        if (item) {
            // Add item to room items array
            this.currentRoom.items.push(item);

            // Remove from player items
            const itemIndex = this.items.indexOf(item);
            if (itemIndex > -1) {
                this.items.splice(itemIndex, 1);
            }

            console.log(`${this.name} has dropped: ${item.name}`);
        } else {
            console.log("Player does not have this item.");
        }

    }

    eatItem(itemName) {
        const item = this.getItemByName(itemName);
        if (item) {
            // Check if the item is food
            if (item.isFood) {
                // Apply the food's effect (assuming it has an 'effect' function)
                if (item.effect) {
                    console.log(`${this.name} eats the ${item.name} and feels its effects.`);
                    item.effect(this);  // Apply the effect on the player (e.g., heal)
                } else {
                    console.log(`${this.name} eats the ${item.name}, but it has no effect.`);
                }

                // Remove from player's inventory after eating
                const itemIndex = this.items.indexOf(item);
                if (itemIndex > -1) {
                    this.items.splice(itemIndex, 1);
                }

                console.log(`${this.name} has eaten: ${item.name}`);
            } else {
                console.log(`${item.name} is not food and cannot be eaten.`);
            }
        } else {
            console.log("Player does not have this item.");
        }

    }

    getItemByName(name) {

        return this.items.find(item => item.name.toLowerCase() === name.toLowerCase());
    }
}

module.exports = {
  Player,
};

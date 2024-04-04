class BirdNotFly {
    constructor(name, size, weight, height, numOfWings) {
        this.name = name;
        this.size = size;
        this.weight = weight;
        this.height = height;
        this.numOfWings = numOfWings
    }
    eat() {
        console.log("eating food")
    }
    swim() {
        console.log("swimming")
    }
    makeSound() {
        throw new Error("makeSound method must be implemented.");
    }
}

class BirdFly {
    constructor(name, size, weight, height, numOfWings) {
        this.name = name;
        this.size = size;
        this.weight = weight;
        this.height = height;
        this.numOfWings = numOfWings
    }
    fly() {
        console.log("flying")
    }
    eat() {
        console.log("eating food")
    }
    swim() {
        console.log("swimming")
    }
    makeSound() {
        throw new Error("makeSound method must be implemented.");
    }
}

class Sparrow extends BirdFly {
    makeSound() {
        console.log("che cheee");
    }
}

class Crow extends BirdFly {
    makeSound() {
        console.log("ka kaa");
    }
}

class Penguin extends BirdNotFly {
    makeSound() {
        console.log("rrr rr");
    }
    walk() {
        console.log("walking")
    }
}
const sparrow = new Sparrow()
sparrow.name = "Sparrow";
sparrow.size = 2;
sparrow.height = 10;
sparrow.numOfWings = 2;
sparrow.makeSound()


const penguin = new Penguin();

penguin.fly(); // no method called fly, penguins cant fly
penguin.walk()


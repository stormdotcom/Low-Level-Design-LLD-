class Bird {
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

class Sparrow extends Bird {
    makeSound() {
        console.log("che cheee");
    }
}

class Crow extends Bird {
    makeSound() {
        console.log("ka kaa");
    }
}

const sparrow = new Sparrow()
sparrow.name = "Sparrow";
sparrow.size = 2;
sparrow.height = 10;
sparrow.numOfWings = 2;
sparrow.makeSound()

const crow = new Crow();
crow.name = "Crow";
crow.makeSound()



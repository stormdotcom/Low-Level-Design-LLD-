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
    // bad implementation, its violating S of SOLID
    makeSound() {
        if (this.name === "Crow") {
            console.log("ka kaa")
        }
        else if (this.name === "Sparrow") {
            console.log("che cheee")
        }
    }
}



const sparrow = new Bird()
sparrow.name = "Sparrow";
sparrow.size = 2;
sparrow.height = 10;
sparrow.numOfWings = 2;
sparrow.makeSound()

const crow = new Bird();
crow.name = "Crow";
crow.makeSound()

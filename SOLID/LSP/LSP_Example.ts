// Base class representing a bird
abstract class BirdC {
    constructor(name: string, height: number) {

    }
    eatFood() {
        console.log("eating food")
    }
}


interface Flyable {
    fly(): void
}


interface Sound {
    makeSound(): void
}





//  [+++++++++++++++++++++++++++++]

class Pigeon extends BirdC implements Flyable, Sound {
    fly(): void {
        console.log('Pigeon is flying.');
    }

    makeSound(): void {
        console.log('Pigeon is cooing.');
    }
}


class CrowC extends Bird implements Flyable, Sound {
    makeSound(): void {
        console.log('Crow is cawing.');
    }
    fly(): void {
        console.log('Crow is flying.');
    }
}

// Client code
function makeBirdSound(bird: BirdC): void {
}

const sparrow = new Sparrow();
const crow = new Crow();

makeBirdSound(sparrow); // Output: Sparrow is chirping.
makeBirdSound(crow);    // Output: Crow is cawing.

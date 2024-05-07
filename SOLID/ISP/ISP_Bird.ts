// define interfaces for different behaviors

interface Flyable {
    fly(): void;
}

interface Swimmable {
    swim(): void;
}

// Bird class implementing interfaces

class BirdClass implements Flyable, Swimmable {
    fly() {
        console.log("Bird is flying.");
    }

    swim() {
        console.log("Bird is swimming.");
    }
}

// Client code using the Bird class

function makeBirdFly(bird: Flyable) {
    bird.fly();
}

function makeBirdSwim(bird: Swimmable) {
    bird.swim();
}

const bird = new BirdClass();
makeBirdFly(bird); // Output: Bird is flying.
makeBirdSwim(bird); // Output: Bird is swimming.

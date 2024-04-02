class Driver {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

// Car class with dependency injection via constructor
class Car {
    constructor(driver) {
        this.driver = driver;
    }

    start() {
        console.log(`${this.driver.getName()} starts the car.`);
    }
}

// Creating instances and injecting dependencies
const car = new Car(new Driver("John"));

car.start();
class Driver {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}


class Car {
    constructor(driver) {
        this.driver = driver;
    }

    start() {
        console.log(`${this.driver.getName()} starts the car.`);
    }
}

const car = new Car(new Driver("Ajmal"));

car.start();
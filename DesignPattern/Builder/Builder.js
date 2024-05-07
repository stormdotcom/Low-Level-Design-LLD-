// Student class
class Student {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address; // add address node
    }

    toString() {
        return `Student [name=${this.name}, age=${this.age}, address=${this.address.city}, ${this.address.zipCode} ]`;
    }
}

class Address {
    constructor(city, zipCode) {
        this.city = city;
        this.zipCode = zipCode;
    }
}
// StudentBuilder helper class
class StudentBuilder {
    constructor() {
        this.name = '';
        this.age = 0;
        this.address = null;
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setAddress(address) {
        // address node
        this.address = address;
        return this;
    }

    build() {
        return new Student(this.name, this.age, this.address);
    }
}

// Main class
class Main {
    static main() {
        const builder = new StudentBuilder();
        const address = new Address("New York", "10001");
        const student = builder.setName("John")

            .setAge(20)
            .setAddress(address)
            .build();

        console.log(student.toString());
    }
}

Main.main();

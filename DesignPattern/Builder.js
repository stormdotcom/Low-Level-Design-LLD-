// Student class
class Student {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    toString() {
        return `Student [name=${this.name}, age=${this.age}, address=${this.address}]`;
    }
}

// StudentBuilder helper class
class StudentBuilder {
    constructor() {
        this.name = '';
        this.age = 0;
        this.address = '';
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
        const student = builder.setName("John")
            .setAge(20)
            .setAddress("123 Main St")
            .build();

        console.log(student.toString());
    }
}

Main.main();

// prototype class
class Student {
    constructor(public name: string, public age: number) { }

    clone(): Student {
        // Create a shallow copy of the object
        return Object.create(this);
    }
}

// concrete prototype extension
class IntelligentStudent extends Student {
    constructor(name: string, age: number, public iq: number) {
        super(name, age);
    }

    clone(): IntelligentStudent {
        // Create a shallow copy of the object
        return Object.create(this);
    }
}

// client  usage
const originalStudent = new Student('John', 20);
const copiedStudent = originalStudent.clone();
console.log(copiedStudent); // Output: Student { name: 'John', age: 20 }

const originalIntelligentStudent = new IntelligentStudent('Alice', 22, 140);
const copiedIntelligentStudent = originalIntelligentStudent.clone();
console.log(copiedIntelligentStudent); // Output: IntelligentStudent { name: 'Alice', age: 22, iq: 140 }

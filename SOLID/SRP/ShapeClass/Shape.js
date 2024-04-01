// Before applying OCP
class Shape {
    // common properties and methods
}

class Circle extends Shape {
    calculateArea() {
        // area calculation logic for circle
    }
}

class Square extends Shape {
    calculateArea() {
        // area calculation logic for square
    }
}

// After applying OCP
class Circle {
    calculateArea() {
        // area calculation logic for circle
    }
}

class Square {
    calculateArea() {
        // area calculation logic for square
    }
}

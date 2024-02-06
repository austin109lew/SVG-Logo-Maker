class Shape {
    constructor() {
        this.color = null;
    }

    setColor(color) {
        this.color = color;
    }

    // Abstract method for rendering shape
    render() {
        throw new Error('Method "render" must be implemented');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    render() {
        return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
        // Add properties for triangle if needed
    }

    render() {
        // Implement rendering logic for triangle
        // For example, you can use SVG polygon element to draw a triangle
        return `<polygon points="150, 10 100, 190 200, 190" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor() {
        super();
        // Add properties for square if needed
    }

    render() {
        // Implement rendering logic for square
        // For example, you can use SVG rect element to draw a square
        return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };

// lib/shapes.js

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
    }
}

class Square extends Shape {
    constructor() {
        super();
        // Add properties for square if needed
    }

    render() {
        // Implement rendering logic for square
    }
}

module.exports = { Circle, Triangle, Square };

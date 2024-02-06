// lib/shapes.test.js

const { Circle } = require('./shapes');

describe('Circle', () => {
    test('render method should return SVG representation of a circle', () => {
        const circle = new Circle(50); // Radius of 50
        circle.setColor('blue');
        expect(circle.render()).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />');
    });
});

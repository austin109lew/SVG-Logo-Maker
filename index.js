// index.js

import('inquirer').then(inquirer => {
    // Your code that uses inquirer goes here
}).catch(error => {
    console.error('Error occurred while importing inquirer:', error);
});

const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const promptUser = async (inquirer) => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the text:',
            validate: value => value.length <= 3 ? true : 'Please enter up to three characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):'
        }
    ]);
        return answers;
    };


const generateSVG = (text, textColor, shape, shapeColor) => {
    let shapeObject;
    switch (shape) {
        case 'Circle':
            shapeObject = new Circle(100); // Assuming a default radius of 100
            break;
        case 'Triangle':
            shapeObject = new Triangle();
            break;
        case 'Square':
            shapeObject = new Square();
            break;
        default:
            throw new Error('Invalid shape');
    }
    shapeObject.setColor(shapeColor);

    const svgContent = `<svg width="300" height="200">
        ${shapeObject.render()}
        <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>`;

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
};

const main = async () => {
    try {
        const inquirer = await import('inquirer');
        const { text, textColor, shape, shapeColor } = await promptUser(inquirer.default);
        generateSVG(text, textColor, shape, shapeColor);
    } catch (error) {
        console.error('An error occurred:', error);
    }
};


main();

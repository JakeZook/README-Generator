// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your discord user name:',
    },
    {
        type: 'input',
        name: 'year',
        message: 'Enter the year:',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing guidelines:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GNU GPLv3', 'None'],
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) 
        {
            console.error('Error writing to README.md:', err);
        } 
        
        else 
        {
            console.log('README.md created successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const file = generateMarkdown(answers);
        writeToFile(file);
    });
}

// Function call to initialize app
init();

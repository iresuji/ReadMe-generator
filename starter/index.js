
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },

    //Table of content

    // Description
    {
        type: 'input',
        name: 'description',
        message: 'Please put your project description'
    },
    // Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation guide for this application'
    },
    // Usage
    {
        type: 'input',
        name: 'usage',
        message: 'How can you use this application?'
    },
    // License (multiple choice)
    {
        type: 'list',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license',
        message: 'What is your project license type?'
    },
    // Contributing
    {
        type: 'input',
        name: 'contributing',
        message: 'Who has contributed to the creation of this application?'
    },
    // Tests
    {
        type: 'input',
        name: 'test',
        message: 'How can you test this application?'
    },

    // Questions
    // GitHub username
    {
        type: 'input',
        name: 'username',
        message: 'What is your gitHub username?'
    },
    // email address
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?' //Can we add a promp and autocomplete?
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Success!');
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            const markdown = generateMarkdown(answers);
            console.log(markdown);
            writeToFile('README.md', markdown); //Create the README file
        });
}

// function call to initialize program
init();
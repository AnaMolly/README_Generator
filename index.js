// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
    },
    {
    type: 'input',
    message: 'Enter the link to your GitHub profile:',
    name: 'profile',
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    },
    {
    type: 'input',
    message: 'Include a link to your deployed application:',
    name: 'applink',
    },
    {
    type: 'input',
    message: 'Write a short description for your project:',
    name: 'description',
    },
    {
    type: 'input',
    message: 'Screenshot of the application. What is the screenshot filepath?',
    name: 'screenshot',
    },
    {
    type: 'input',
    message: 'What are the instructions to install your project?',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'What are the instructions for using your project?',
    name: 'usage',
    },
    {
    type: 'input',
    message: 'What are the instructions for testing your project?',
    name: 'testing',
    },
    {
    type: 'input',
    message: 'Include any collaborators and a link to their GitHub:',
    name: 'collaborators',
    },
    {
    type: 'list',
    message: 'Choose a license for your project:',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'GPLv2',  'GPLv3', 'LGPLv3', 'AGPLv3', 'Mozilla 2.0', 'Boost Software License', 'Unlicense']
    }
];




// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => 
    fs.writeFile('README.md',generateMarkdown(answers), (err) => err ? console.error(err) : console.log('Your README file has been generated!')))
    
}

// Function call to initialize app
init();

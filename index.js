// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown  = require('./utils/generateMarkdown');

// TODO: Create a function to write README file
function writeToFile(file, data) {
 return fs.writeFileSync(path.join(file), data)
}

//Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please type a short description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like your project to have?',
        choices: ['APACHE_2.0', 'Boost_1.0', 'BSD_3--Clause', 'MIT', 'None'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
]

    function start (){
        inquirer.prompt (questions).then((response) => {
        console.log("answers")
        writeToFile('./output/README.md', generateMarkdown(response))
    
        })}
        start()
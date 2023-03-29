// TODO: Include packages needed for this application
const generateMarkdown  = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// TODO: Create a function to write README file
function writeToFile(file, data, err) {
    if (err) {

 return fs.writeFileSync(path.join(file), data)
}};

//Array questions for user 
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "Enter your github username?",
    },
    {
        type: 'input',
        name: 'titleofproject',
        message: 'Enter the title of your project',
    },
    {
        type: 'input',
        name: 'descriptionofproject',
        message: 'Enter the description of your project',
    },
    // {
    //     type: 'input',
    //     name: 'title',
    //     message: "What is your project's name?",
    // },
    // {
    //     type: 'input',
    //     name: 'description',
    //     message: 'Please type a short description of your project:',
    // },
    {
        type: 'input',
        name: 'installation',
        message: 'What is needed to install your work?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is required to run a test on your project?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should the user use your work?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: '?',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like your project to have?',
        choices: ['APACHE_2.0', 'Boost_1.0', 'BSD_3--Clause', 'MIT', 'None'],
    },
]

    function start (){
        inquirer.prompt(questions).then((response) => {
        console.log("answers")
        writeToFile('./output/README.md', generateMarkdown({response}))
    
        })}
        start();
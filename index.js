const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {name: "title",
    type: "input",
    message: "What is the project title?"},
    {name: "description",
    type: "input",
    message: "Please write a short project description"},
    {name: "installation",
    type: "input",
    message: "How do you install the project and its dependencies?"},
    {name: "usage",
    type: "input",
    message: "How is the project used?"},
    {name: "contributing",
    type: "input",
    message: "How can users contribute to the project?"},
    {name: "tests",
    type: "input",
    message: "How can users test the app?"},
    {name: "license",
    type: "checkbox",
    choices: ["Apache", "GNU General Public", "MIT", "BSD 2-Clause \"Simplified\"",
    "BSD 3-Clause \"New\" or \"Revised\"", "Boost Software", "Creative Commons Zero v1.0 Universal",
    "Eclipse Public", "GNU Affero General Public", "GNU General Public", "GNU Lesser General Public",
    "Mozilla Public", "The Unlicense"],
    message: "What kind of licence are you using?"},
    {name: "questions",
    type: "input",
    message: "What is your GitHub URL?"}
];

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        fileName = `${answers['title']}-README.md`; 
        data = generateMarkdown(answers)
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                console.error(err); 
            } else {
                console.log('Success!');
            }
        })
    })
}

// function call to initialize program
init();
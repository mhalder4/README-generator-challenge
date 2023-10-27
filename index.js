// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title"
  },
  {
    type: "input",
    message: "Enter a description of your project:",
    name: "description"
  },
  {
    type: "input",
    message: "Enter the installation instructions for your project:",
    name: "install"
  },
  {
    type: "input",
    message: "Enter the usage information for your project:",
    name: "usage"
  },
  {
    type: "input",
    message: "Enter the credits for your project:",
    name: "credits"
  },
  {
    type: "input",
    message: "Enter the test instructions for your project:",
    name: "tests"
  },
  {
    type: "list",
    message: "Select the license for your project from below.",
    choices: ["GNU Affero General Public License v3.0", "GNU GPLv3.0", "GNU LGPLv3.0", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense", "No license"],
    name: "license"
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "gitHubUser"
  },
  {
    type: "input",
    message: "Enter your primary contact email:",
    name: "email"
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, data, (err) => err ? console.log(err) : console.log(`File ${fileName}.md was created successfully.`));
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      const mdFile = generateMarkdown(answers);
      console.log(answers);
      writeToFile("README", mdFile);
    })
}

// Function call to initialize app
init();

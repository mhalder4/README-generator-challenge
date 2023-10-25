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
    message: "Enter the contributions for your project:",
    name: "contributions"
  },
  {
    type: "input",
    message: "Enter the test instructions for your project:",
    name: "tests"
  },
  {
    type: "list",
    message: "Select the license for your project from below.",
    choices: ["MIT"],
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
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      const md = generateMarkdown(answers);
      console.log(answers);
      console.log(md);
    })
}

// Function call to initialize app
init();

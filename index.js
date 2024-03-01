

// Function call to initialize app
init();

const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("/Users/ukudei/Desktop/44/potential-enigma-main-4/utils");

// an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the name your Projec?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },
    {
      type: "input",
      name: "screenshot",
      message: "What is the link to the screenshot?"
    },
    {
      type: "input",
      name: "link",
      message: "What is the link to the deployed application?"
    },
    {
      type: "checkbox",
      name: "license",
      message: "Please select a license applicable to this project.",
      choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
      type: "input",
      name: "require",
      message: "Please list any project dependencies here.",
    },
    {
      type: "input",
      name: "features",
      message: "What are the key features of this project?",
    },
    {
      type: "input",
      name: "usage",
      message:
        "What languages and technologies are being used in this project?",
    },
    {
      type: "input",
      name: "creator",
      message: "What is the link to your GitHub account?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address.",
    },
    {
      type: "input",
      name: "contributors",
      message: "Please list any contributors. (Use GitHub usernames)",
      default: "",
    },
    {
      type: "input",
      name: "test",
      message: "Provide walkthrough of required tests if applicable.",
    },
  ];
//  function to write README file
  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

  // Function call to initialize app
  function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("/Users/ukudei/Desktop/UT bootcamp/README-rator 9000/Readme-Rator-9000/GRM", generateMarkdown({ ...responses }));
    });
  }
  init();
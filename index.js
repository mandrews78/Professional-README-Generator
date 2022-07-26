// External Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for the user.
const questions = [

  {
    type: 'input',
    message: 'What is the name or title of your project? ',
    name: 'title',
    //validate property to check that the user entered a name or title.
    validate: (answer) => {if (answer) {return true} else {return 'Please enter a title, to continue'}}
  },
  {
    type: 'input',
    message: 'Please give a brief description of your project: ',
    name: 'description',
    validate: (answer) => {if (answer) {return true} else {return 'Please enter a title, to continue'}}
  },
  {
    type: 'input',
    message: 'Pleasa provide install dependencies for your application for the Installation section?',
    name: 'installation',
    validate: (answer) => {if (answer) {return true} else {return 'Please provide installation steps, to continue'}}
  },
  {
    type: 'input',
    message: 'How do we use your application? ',
    name: 'usage',
    validate: (answer) => {if (answer) {return true} else {return 'Please provide usage instructions to continue'}}
  },
  {
    type: 'input',
    message: 'Please provide any tests written for your application and how to run them.',
    name: 'tests',
    validate: (answer) => {if (answer) {return true} else {return 'Please provide tests if any to continue'}}
  },
  {
    type: 'input',
    message: 'List your collaborators, if any, with links to their GitHub profiles.',
    name: 'credits'
    
  },
  {
    //List of type of licenses to use
    type: 'list',
    message: 'Choose a license for your project? ',
    choices: ['AFL 3.0', 'GPL', 'MIT', 'MPL-2.0', 'no license'],
    name: 'license'
  },
  {
    type: 'input',
    message: 'What is your GitHub username? ',
    name: 'username',
    validate: (answer) => {if (answer) {return true} else {return 'Please provide a GitHub username to continue'}}
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    validate: (answer) => {if (answer) {return true} else {return 'Please enter an email address, to continue'}}
  },
];


//Function to create README file using fs package
function createReadMe(fileName,data){
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

//function to iniitialize the application
function init(){
    inquirer.prompt(questions)
    .then(function(data){
        createReadMe("README.md", generateMarkdown(data));
        console.log(data)
    })
}


//function call to intialize the application
init();
        

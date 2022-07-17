console.log(`Program Started...`)
// External Packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// Inquirer prompts for userResponses

const questions = [

  {
    type: 'input',
    message: 'What is the name or title of your project? ',
    name: 'title'

  },
  {
    type: 'input',
    message: 'Please give a brief description of your project: ',
    name: 'description'

  },
  {
    type: 'input',
    message: "What is the author's name? ",
    name: 'name'

  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email'

  },
  {
    type: 'input',
    message: 'What is your GitHub username? ',
    name: 'username'

  },
  {
    type: 'input',
    message: 'What is the name of your GitHub repository?',
    name: 'repo'

  },
  {
    type: 'input',
    message: 'Pleasa provide the steps required to install your project for the Installation section?',
    name: 'installation'

  },
  {
    type: 'input',
    message: 'Provide instructions on how to use your application for the Usage section ',
    name: 'usage'

  },
  {
    type: 'input',
    message: 'Please provide any tests written for your application and how to run them.',
    name: 'tests'

  },
  {
    type: 'list',
    message: 'Choose a license for your project? ',
    choices: ['AFL 3.0', 'Apache 2.0', 'BSD 3', 'GNU AGPLv3', 'GPL', 'MIT', 'MPL-2.0', 'None'],
    name: 'license'

  }
];

inquirer.prompt(questions)
  .then((answers) => {
    console.log(answers)
    console.log(`Program complete...`)
  })

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {
  if (license.length === 0) {
    return ''
  }else if (license === 'MIT') {
    return `[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)`
  }else if (license === 'AFL 3.0') {
    return `[![License](https://img.shields.io/badge/license-AFL%203.0-orange.svg)](https://opensource.org/licenses/AFL-3.0)`
  }else if (license === 'GPL') {
    return `[![License](https://img.shields.io/badge/license-GPL-blue.svg)](https://opensource.org/licenses/GPL-3.0)`
  }else if (license === 'MPL-2.0') {
    return `[![License](https://img.shields.io/badge/license-MPL%202.0%20-red.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}
// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) {
  if (license.length === 0) {
    return ''
  }else if (license == 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }else if (license == 'AFL 3.0') {
    return `https://opensource.org/licenses/AFL-3.0`
  }else if (license === 'GPL') {
    return `https://opensource.org/licenses/GPL-3.0`
  }else if (license === 'MPL-2.0') {
    return `https://opensource.org/licenses/MPL-2.0`
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) {
  if (license.length === 0) {
    return ''
  }else {
    return `## License
        ${renderLicenseBadge(license)} 
        ${renderLicenseLink(license)}`
  }
}
// Create a function to generate markdown for README
// function that generates markdown for the readme file
function generateMarkdown (data) {
  return `# ${data.title}

https://github.com/${data.username}/${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Credits
${data.credits}

## Contact
If you have any questions about the repository or about this application please send an email to: ${data.email}
- Github: ${data.username}`
}
// export markdown function
module.exports = generateMarkdown

inquirer.prompt(questions)
.then(({
    title,
    description,
    installation,
    usage,
    tests,
    credits,
    license,
    username,    
    email
}) => {
const template = `# ${title}
## Description 
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests] (#tests)
- [Credits](#credits)
- [License](#license)
 
## Installation
${installation}
## Usage
${usage}
## Tests
${tests}
## Credits
${credits}
## License
${license}

# Contact
- Github: ${username}
- Email: ${email}`;
})
module.exports = generateMarkdown;
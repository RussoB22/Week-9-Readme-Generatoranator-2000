// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
function getLicenseBadge(license) {
    switch (license) {
      case 'MIT':
        return 'https://img.shields.io/badge/License-MIT-yellow.svg';
      case 'GPLv3':
        return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      case 'Apache':
        return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      case 'Unlicense':
        return 'https://img.shields.io/badge/license-Unlicense-blue.svg';
      default:
        return '';
    }
  }
function getLicenseDescription(license) {
switch (license) {
    case 'MIT':
    return 'A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  There are many variations of this license in use.';
    case 'GPLv3':
    return 'You may copy, distribute and modify the software as long as you track changes/dates in source files. Any modifications to or software including (via compiler) GPL-licensed code must also be made available under the GPL along with build & install instructions.';
    case 'Apache':
    return 'You can do what you like with the software, as long as you include the required notices. This permissive license contains a patent license from the contributors of the code.';
    case 'Unlicense':
    return 'Releases code into the public domain, thereby releasing all rights you may hold to that code.';
    default:
    return '';
}
}
// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Name your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are your contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license?',
        choices: ['MIT', 'GPLv3', 'Apache', 'Unlicense'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
      message: 'Enter your email address:',
    },
])
.then((answers) => {
    const {
        title,
        description,
        installation,
        usage,
        contributing,
        tests,
        license,
        github,
        email,
    } = answers;

    const licenseBadge = getLicenseBadge(license);
    const licenseDescription = getLicenseDescription(license);

    const readmeContent = `# ${title}
    
## Description ![License](${licenseBadge})
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Contributing
${contributing}

## Tests
${tests}

## License
This project is licensed under the ${license} license.
${licenseDescription}

## Questions
If you have any questions or issues, please contact me at [${email}](mailto:${email}). You can also check out my other projects at [https://github.com/${github}](https://github.com/${github}).
`;
    
// TODO: Create a function to write README file
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README Generated!');
    });
})
.catch((error) => console.error(error));
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
    const data = {
        title: answers.title,
        description: answers.description,
        installation: answers.installation,
        usage: answers.usage,
        contributing: answers.contributing,
        tests: answers.tests,
        license: answers.license,
        github: answers.github,
        email: answers.email,
      };

const readmeContent = generateMarkdown(data);
    
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

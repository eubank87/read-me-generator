// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('util');
const writePromise = utils.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project Title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a brief description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter photo name:',
        name: 'photo'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Which License did you use?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'IBM', 'Mozilla'],
    },
    {
        type: 'input',
        message: 'Enter link to deployed site:',
        name: 'link',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];


// Create a function to initialize app
const init = async () => {
    try{
        const answers = await inquirer.prompt(questions)
        const readmeOutput = generateMarkdown(answers)
        await writePromise(`${answers.title}.md`, readmeOutput)
        console.log("Read me done!")
    } catch(err){
        console.log(err);
    }
}

// Function call to initialize app
init();

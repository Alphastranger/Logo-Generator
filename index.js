const fs = require('fs')
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

const userQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text up to three characters.',
            // validate: function(input){
            //     if (input.indexof > 3)
            //     {console.log('Text too long, please keep it below three characters.');
            //     return; }

            // }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a text color using a color keyword or hexadecimal number.'
        },
        {
            type: 'input',
            name: 'color',
            message: 'Please enter a color keyword or hexadecimal number.'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please select a shape.',
            choices: ['square', 'circle', 'triangle']
        }
    ])
    .then((response)=>{
        fs.writeFile(`./examples/logo.svg`, shapes(response), (err) =>{
            err ? console.log(err) : console.log('Working as intended')
        })
    })
}
userQuestions()
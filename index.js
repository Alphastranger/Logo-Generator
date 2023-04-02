const fs = require('fs')
const shapes = require('./lib/shapes')

const userQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text up to three characters.'
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
import inquirer from 'inquirer';
var question = [
    {type:'input', name:'username', message:'Username:'},
    {type:'password', name:'password', message:'Password'}
]
inquirer.prompt(question).then(answers => {
    console.log(`Hi ${answers['username']}!`)
})
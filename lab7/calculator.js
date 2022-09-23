import inquirer from 'inquirer'

const args = process.argv.slice(2)

function add(n1, n2) {
    let result = Number(n1) + Number(n2)
    return result;
}

function sub(n1, n2) {
    let result = Number(n1) - Number(n2)
    return result;
}
  
var questions = [
    {	
      type: 'input',
      name: 'operands',
      message:'add | subtract '
    }
]

inquirer.prompt(questions).then(answers => {
    const userAnswer = answers['operands'].toLowerCase().trim();
    if (userAnswer == 'add'){
        const msg = args[0] + " + " + args[1] + " = " + add(Number(args[0]), Number(args[1]));
        console.log(msg);
    }
    else if (userAnswer == 'subtract'){
        const msg = args[0] + " - " + args[1] + " = " + sub(Number(args[0]), Number(args[1]));
        console.log(msg);
    }
    else{
        console.log('Unknown opertor')
    }
});
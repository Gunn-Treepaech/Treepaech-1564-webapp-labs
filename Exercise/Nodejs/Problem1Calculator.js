import readline from 'readline';
const args = process.argv.slice(2)
let yourCal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
yourCal.question(`add | subtract : `,uCal =>{
    if (uCal == 'add'){
        console.log(`${args[0]} + ${args[1]} = ${Number(args[0])  + Number(args[1])}`)
    }
    else if (uCal == 'subtract'){
        console.log(`${args[0]} - ${args[1]} = ${Number(args[0])  - Number(args[1])}`)
    }
    else{
        console.log('Unknown opertor')
    }
})
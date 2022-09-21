import readline from 'readline';
let yourname = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

yourname.question(`What's your name?`,name =>{
    console.log(`Hi ${name}!`)
})
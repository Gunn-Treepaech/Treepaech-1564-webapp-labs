import readline from 'readline';
let yourNum = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
yourNum.question(`Operands:`,numU =>{
    let arrnum = numU.split(" ")
    console.log(`operands are ${numU}`)
    console.log(`${arrnum[0]} + ${arrnum[1]} = ${Number(arrnum[0])  + Number(arrnum[1])}`)
})
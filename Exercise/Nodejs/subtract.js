const args = process.argv.slice(2);
const result = args
            .map((num) => parseFloat(num))
            .reduce((total, x) => total - x);
console.log(`${args.join(" - ")} = ${result}`);
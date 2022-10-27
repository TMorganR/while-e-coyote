const prompt = require('prompt-sync')({sigint: true})

let userInput = Number(prompt("Enter first number: "))
let userInput2 = Number(prompt("Enter second number: "))

output = userInput % userInput2

while(output != 0){
    userInput++
    console.log(userInput)
    output = userInput % userInput2
}
console.log(`${userInput} is divisible by ${userInput2}.`)




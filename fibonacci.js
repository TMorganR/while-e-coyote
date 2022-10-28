const prompt = require('prompt-sync')({sigint: true})

console.log("The Fibonacci sequence. 'N' represents how many numbers print.")
let n = Number(prompt("Enter a number for N: "))

let num = 0
let num1 = 1
let num3 = 0

let i = 0

while(i < n){
    console.log(num)
    num3 = num + num1
    num = num1
    num1 = num3
    i = i + 1
}

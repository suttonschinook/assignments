var readline = require("readline-sync")
console.log("I am going to ask you a bunch of questions, I want them answered immediately!")
console.log("You want to do math? Give me two numbers and select the operation to perform.")
var num1 = readline.question("What is your first number? ")
var num2 = readline.question("What is your second number? ")
var operation = ["Add", "Subtract", "Multiply", "Divide"]

var operationChoice = readline.keyInSelect(operation, "What operation would you like to perform")
var sum = doMath(num1,num2)
var sub = doMath(num1,num2)
var mul = doMath(num1,num2)
var div = doMath(num1,num2)

function doMath(num1, num2){
    if (operationChoice == "0"){
        sum = Number(num1) + Number(num2)
        return sum
    }else if (operationChoice == 2){
        sub = Number(num1) - Number(num2)
        return sub
    }else if (operationChoice === 3){
        mul = num1 * num2
        return mul
    }else{
        div = num1 / num2
        return div   
    }
} 

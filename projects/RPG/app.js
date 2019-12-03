const readline = require("readline-sync")

console.log("\n\t\t\t\Hello Player, welcome to hell!")

const playerName = readline.question("\n\nWhat is your name, Fucker? : ")
console.log("\n\n\tThat's a horrible name, I assume your parents hate you..... I guess I'll refer to you as " + playerName +", enjoy your time in hell!")

let playerSelection = readline.question("\n\n What would you like to do?  \n\n Press W to walk \n\n Press S to check status \n\n Press I to check inventory   ")
let playerHealth = 100

if (playerSelection == "w"){
    console.log("You start walking in a random direction, do you even know where you are going?")
}else if (playerSelection == "s"){
    console.log("\n\n\t\t\t" + playerName + ", your current HP is " + playerHealth)
}
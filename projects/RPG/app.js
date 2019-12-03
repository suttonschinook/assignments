const readline = require("readline-sync")

console.log("\n\t\t\t\Hello Player, welcome to hell!")

const playerName = readline.question("\n\nWhat is your name, Fucker? : ")
console.log("\n\n\tThat's a horrible name, I assume your parents hate you..... I guess I'll refer to you as " + playerName +", enjoy your time in hell!")

let playerSelection = readline.question("\n\n What would you like to do?  \n\n Press W to walk \n\n Press S to check status \n\n Press I to check inventory   ")
let playerObject = {
    playerHealth: 100,
    playerInventory: [],
}

while(playerObject.playerHealth > 0){
    if (playerSelection === "w"){
        console.log("\n\n\t\t\tYou start walking in a random direction, do you even know where you are going?")
    }else if (playerSelection === "s"){
        console.log("\n\n\t\t\t" + playerName + ", your current HP is " + playerObject.playerHealth)
    }else if(playerSelection ==="i"){
        console.log("\n\n\t\t\t" + playerName + ", your current inventory is:  ")
    }else{
        console.log("Hey fuckstick, that's not a valid selection, try again")
    }
}

// / RPG Approach
// const readline = require("readline-sync")
// ///// Global Variables /////
// const userSelections = ["walk"]
// let gameover = false
// const player = {
//     name: "",
//     health: 100,
//     item: []
// }
// //// Game Functions /////
// function walk(){
//     const randomNum = generateRandomChance(3)
//     if(randomNum === 0){
//         console.log("\n\t\tYou get in a fight")
//         // const enemy = generateEnemy()
//     } else {
//         console.log("\n\t\tNothing happened")
//     }
// }
// // function generateEnemy(){
// //     return { type: "goblin", health: 100 }
// // }
// function generateRandomChance(chance){
//     return Math.floor(Math.random() * chance)
// }
// ///////////////////
// //// Game Loop ////
// console.log("Hello and welcome to game. glhf")
// player.name = readline.question("What is your name?: ")
// console.log("Thank you " + player.name + "\n\n\n\n")
// while(!gameover){
//     const userChoice = readline.keyInSelect(userSelections, "\tWhat would you like to do?: ")
//     if(userChoice === 0){
//        walk()
//     }
//     if(userChoice === -1){
//         process.exit()
//     }
// }
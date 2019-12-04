const readline = require("readline-sync")
//// Greeting
console.log("\n\t\t\t\Hello Player, welcome to hell!")
const playerName = readline.question("\n\nWhat is your name, Fucker? : ")
console.log("\n\n\tThat's a horrible name, I assume your parents hate you..... I guess I'll refer to you as " + playerName +", enjoy your time in hell!")
const choices = ["Walk", "Check HP", "Check Inventory"]
const fightChoices = ["Attack", "Run", "Check HP", "Check Inventory"]
let inFight = false
let playerObject = {
    playerHealth: 100,
    playerInventory: []
}
let youDied = false

let enemy = {}
//// Functions
function generateRandomChance(chance){
        return Math.floor(Math.random() * chance)
    }
function walk(){
        const randomNum = generateRandomChance(4)
        if(randomNum === 0){
            console.log("\n\t\tYou get in a fight")
             const generateMonster = generateEnemy()
             inFight = true
        } else {
            console.log("\n\n\t\t\tYou start walking in a random direction, do you even know where you are going?")
        }
    }
function playerDamage(){
    const damageTaken = generateRandomChance(3)
    if (damageTaken === 0){
        let playerHealth = playerHealth - 25
        console.log("You take 25 damage.")
    }else{
        console.log("The enemy misses you")
    }

}
function run(){
    const runNum = generateRandomChance(2)
    if (runNum === 0){
        console.log("You run away")
        inFight = false
    } else{
        playerDamage()
        console.log("You cannot run away.")
    }
}
function generateEnemy(){
    const enemyNum = generateRandomChance(3);
        if (enemyNum === 0){
            enemy = { type: "Hell Spawn", health: 100}
        }else{
            enemy = {type: "Minion", health: 100}
        }
}
function fight(){
    const fightDamage = generateRandomChance(3);
    if (fightDamage === 0){
        console.log("You take 25 damage")
        playerObject.playerHealth = playerObject.playerHealth -25
        if (playerObject.playerHealth <= 0){
            console.log("Game Over")
            process.exit()
        }
    }
    else{
        console.log("The enemy takes 25 damage")
        enemy.health = enemy.health -25
        if (enemy.health <= 0){
            console.log("You killed the " + enemy)
            inFight = false
        }
    }
}
//// Gameplay

while(!youDied && !inFight){
    const playerSelection = readline.keyInSelect(choices, "What would you like to do?   ")
    if (playerSelection === 0){
        walk()
    }else if(playerSelection === 1){
        console.log("\n\n\t\t\tYour current status is "+ playerObject.playerHealth)
    }else if(playerSelection === 2){
        console.log("\n\n\t\t\tYour current inventory is " + playerObject.playerInventory)
    }else if(playerSelection === -1){
        process.exit()
    }
}

while(!youDied && inFight){
    console.log(enemy)
    const playerSelection = readline.keyInSelect(fightChoices, "What would you like to do?   ")
    if (playerSelection === 0){
        fight()
    }else if (playerSelection === 1){
        run()
    }else if(playerSelection === 2){
        console.log("Your current status is "+ playerObject.playerHealth)
    }else if(playerSelection === 3){
        console.log("Your current inventory is " + playerObject.playerInventory)
    }else if(playerSelection === -1){
        process.exit()
    }
}
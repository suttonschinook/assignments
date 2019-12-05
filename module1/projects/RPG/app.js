const readline = require("readline-sync")
//// Greeting
console.log("\n\t\t\t\Hello Player, welcome to hell!")
const playerName = readline.question("\n\nWhat is your name, Fucker? : ")
console.log("\n\n\tThat's a horrible name, I assume your parents hate you..... I guess I'll refer to you as " + playerName +", enjoy your time in hell!")
const choices = ["Walk", "Check HP", "Check Inventory"]
const fightChoices = ["Attack", "Run", "Check HP", "Check Inventory"]
items = [" Some Magic Beans", " A Magic Flute", " An ordinary rock", " 1 Gold piece", " A moldy sandwich", " An O.G. 80's TRAPPER KEEPER!"]
const randomItems = items[Math.floor(Math.random()*items.length)];

let inFight = false
let playerObject = {
    playerHealth: 50,
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
        var damageDone = Math.floor(Math.random()*15)
        playerObject.playerHealth = playerObject.playerHealth - damageDone;
        console.log("You take " + damageDone + " damage.")
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
        }else if (enemyNum === 1){
            enemy = {type: "Minion", health: 50}
        }else if (enemyNum === 2){
            enemy = {type: "Minion's Apprentice", health: 25}
        }
}
function fight(){
    const fightDamage = generateRandomChance(3);
    if (fightDamage === 0){
        playerDamage()
        if (playerObject.playerHealth <= 0){
            console.log("It seems you were not strong enough, Game Over")
            process.exit()
        }
    } else {
        var damageDone = Math.floor(Math.random()*10)
        console.log("The enemy takes " + damageDone + " damage")
        enemy.health = enemy.health - damageDone
        if (enemy.health <= 0){
            playerObject.playerInventory = playerObject.playerInventory + randomItems
            console.log("You killed the " + enemy.type + " and found " + randomItems)
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
    }while(!youDied && inFight){
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
}

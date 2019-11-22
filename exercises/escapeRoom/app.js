var readline = require("readline-sync")

console.log("Good day, it seems you drank too much last night. Or perhaps you smoked too much weed (I think you're addicted, I read about it on Quora). You are currently trapped in this room, better sort this shit out")

var choices = ["Put your hand in the hole", "Look for the key", "Open the door"]
var userChoice = readline.keyInSelect(choices, "Hey addict, shake it off and decide what you would like to do")
var hasKey = false

while (hasKey = false){
    if (userChoice == "0"){
        console.log("You stick your hand in the hole, you touch something that feels like a key, you try to pull it out. It seems you have made a poor decision (much like the rest of your life choices). As you pull the object out you see it is not a key but a pin from a grenade. You will no longer be stealing oxygen from everyone else, the explosion kills you.")
        break
    }else if(userChoice == "1"){
        
    }else if (userChoice == "2"){
        console.log("The door is locked, the door will not open")
        
    }
}
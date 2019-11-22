var readline = require("readline-sync")

console.log("Good day, it seems you drank too much last night. Or perhaps you smoked too much weed (I think you're addicted, I read about it on Quora). You are currently trapped in this room, better sort this shit out")

var choices = ["Put your hand in the hole", "Look for the key", "Open the door"]
var userChoice = readline.keyInSelect(choices, "Hey addict, shake it off and decide what you would like to do")

var hasKey = false
var count = 0

while (!hasKey){
    var choices = ["Put your hand in the hole", "Look for the key", "Open the door"]
    var userChoice = readline.keyInSelect(choices, "Hey addict, shake it off and decide what you would like to do")
    if (userChoice == "0"){
        console.log("You stick your hand in the hole, you touch something that feels like a key, you try to pull it out. It seems you have made a poor decision (much like the rest of your life choices). As you pull the object out you see it is not a key but a pin from a grenade. You will no longer be stealing oxygen from everyone else, the explosion kills you.")
        break
    }else if (userChoice == "2"){
        console.log("The door is locked, the door will not open")
    }else if(userChoice == "1"){
        count++
    }if(count < 3){
            console.log("You look but do not find the key")
        }else if (count >=3){
            console.log("Good job finding the key dumbass, looks like you succeeded in at least one thing in life.....")
            hasKey = true
        }
    }
    

while (hasKey){
    var choices = ["Put your hand in the hole", "Look for the key", "Open the door"]
    var userChoice = readline.keyInSelect(choices, "Hey addict, shake it off and decide what you would like to do")
    if (userChoice == "0"){
        console.log("You stick your hand in the hole, you touch something that feels like a key, you try to pull it out. It seems you have made a poor decision (much like the rest of your life choices). As you pull the object out you see it is not a key but a pin from a grenade. You will no longer be stealing oxygen from everyone else, the explosion kills you.")
        break
    }else if (userChoice == "1"){
        console.log("Trying to find something you already have? You must be high, you idiot.")
    }else (userChoice == "2")
            console.log("Look buddy, you accually followed through with something, wow. Get the hell out of here, hope you don't make it back here because of all your addictions.")
}
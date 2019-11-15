var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0
for (i = 0; i < officeItems.length; i++){
    if (officeItems [i] === "computer"){
        count++
    }
}
console.log(count)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender ==="male"){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He's good to see Mad Max Fury Road.")
        }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender ==="female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. She's good to see Mad Max Fury Road.")
        }else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender ==="male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. He's not good to see Mad Max Fury Road.")
        }else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough. She's not good to see Mad Max Fury Road")
            }
}

var lightFlip = [2, 5, 435, 4, 3]
var count = 0
var lightOn = false

for(var i = 0; i < lightFlip.length; i++){
    count += lightFlip[i]
    if (count % 2 === 1){
        lightOn = true
    }else{
        lightOn = false
    }
}
if (lightOn === true){
    console.log("the light is on")
}else{
    console.log("the light is off")
}
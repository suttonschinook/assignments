var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var twoArr = []
var split = alphabet.split("")

for (i = 0; i < people.length;i++){
    //This code runs
    twoArr.push(people[i])
    for (j = 0; j < split.length; j++){
        twoArr.push(split[j])
    }
}
console.log(twoArr)

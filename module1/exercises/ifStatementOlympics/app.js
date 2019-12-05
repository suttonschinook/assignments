if (5> 3){
    console.log ("is greater than")
}
var feline = "cat"
if (feline.length === 3){
    console.log ("is the length")
}
if ("cat" === "dog"){
    console.log("they are the same")
}else{
    console.log("they are not the same")
}
var person = {
    name: "Bobby",
    age: 12
}
if (person.name[0] ==="B"){
    console.log(person.name + " is allowed to go to the movie")

var person = {
    name: "Bobby",
    age: 12
}
if (person.name[0]=== "B" && person.age >=18){
    console.log(person.name + " is allowed to go to the movie")
}else{
    console.log(person.name + " is not allowed to go to the movie")
}
if (1 === "1"){
    console.log("Strict")
} else if (1 == "1"){
    console.log("loose/abstract")
} else {
    console.log("not equal at all")
}}
if (1 <= 2 && 2 === 4){
    console.log("yes")
}else{
    console.log("no")
}
if (typeof "dog" === "string"){
    console.log("It is a string")
}
if (typeof "true" === "boolean"){
    console.log("it is a boolean")
}else {
    console.log("it is not a boolean")
}
if (typeof goose === "undefined"){
    console.log("Is is undefined")
}
if ("s" > 12){
    console.log("it is greater")
}else{
    console.log("it is not greater")
}
var myNum = 10

myNum % 2 === 0 ? console.log("It is even") : console.log("it is odd")
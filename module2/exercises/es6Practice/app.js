let name = "John"
let age = 101

// function runForLoop(pets) {
//     let petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }


// const runForLoop = arr => arr.map(animal => animal === "cat" ? "fluffy" : "spot")

// console.log(runForLoop(["cat", "dog"]))

// const mapVegetables = arr => arr.map(carrot => carrot.type= "carrot", carrot.name= carrot)
// const carrots = ["bright orange", "ripe", "rotten"]
// console.log(mapVegetables(carrots))

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = arr =>arr.filter(person => person.friendly)
// console.log(filterForFriendly(people))

const doMathSum = (a, b) => a + b
const produceProduct = (a, b) => a * b

console.log(produceProduct(1,2))

const printString = (firstName, lastName, age) => "Hi " + firstName + " " + lastName +", how does it feel to be " + age

console.log(printString("Kat","Stark", 40))

 
const filterForDogs =arr => arr.filter(animal => animal.type === "dog" ? true : false)

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];

 console.log(filterForDogs(animals))

const hawaiiGreeting = (firstName, lastName, destination) =>`
'       Hi ${firstName} ${lastName}

        Welcome to ${destination}
        
        I hope you enjoy your stay. Please ask the supreme leader of ${destination} if you need anything.`

console.log(hawaiiGreeting("Janice", "Stevens", "Hawaii"))
// for (i = 0; i < 10;i++){
//     console.log(i)
// }
// for (i = 9; i > 0; i--){
//     console.log(i)
// }
// var fruit = ["banana", "orange", "apple", "kiwi"]

// for(i = 0; i < fruit.length; i++){
//     console.log (fruit[i])
// }

// var numbers = []

// for (i = 0; i < 9; i++){
//     numbers.push(i)
// }
// console.log(numbers)

// for (i = 0; i <= 100; i++){
//     if (i % 2 === 0){
//         console.log(i)
//     }
// }

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var newFruit = []
// for (i = 0; i < fruit.length; i++){
//     if (i % 2 === 0){
//         newFruit.push (fruit[i]) 
//     }
// }
// console.log(newFruit)

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
//   for (i = 0; i < peopleArray.length; i++){
//       console.log(peopleArray[i].name)
//   }

//   var names = []
//   var occupations = []

//   for (i = 0; i < peopleArray.length; i++){
//         names.push(peopleArray[i].name)
//         occupations.push(peopleArray[i].occupation)
//   }
//   for (i = 0; i < peopleArray.length; i++){
//       if (i % 2 === 0){
//           names.push(peopleArray[i].name)
//       }
//       if (i % 2 === 1){
//           occupations.push(peopleArray[i].occupation)
//       }
//   }
//   console.log (names)
//   console.log (occupations)

var nest = [ [0, 1, 2], [0, 1, 2], [0, 1, 2] ]
var result = []

for ( var i = 0; i < nest.length; i++){
    var newArray = []
    for (var j = 0; j < nest[i].length; j++){
        newArray.push(nest[j][i])
    }
    result.push(newArray)
}
console.log(result)
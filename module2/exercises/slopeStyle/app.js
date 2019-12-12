
// const collectAnimals = (...arr) => arr
// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// const combineFruit = (fruit, sweets, vegetables) => ({fruit,sweets,vegetables,})

// console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]))

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
// const {location, duration} = vacation
  

// console.log("We're going to have a good time in " + location + " for " + duration)

// const returnFirst = items => {
//     const [firstItem] = items
//     return firstItem
// }

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
// const returnFavorites = favoriteActivities =>{
// const [firstFav, secondFav, thirdFav, fourthFav] = favoriteActivities
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav
//     }

// console.log(returnFavorites(favoriteActivities))

// const combineAnimals = (realAnimals,magicalAnimals,mysteriousAnimals) => [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)) 

// const product = numbers => numbers.reduce((acc, number) => acc * number, 1)
// const numbers = [a,b,c,d,e]

// const unshift = (array, a, b, c, d, e) => [a, b, c, d, e, ...array];

const populatePeople = names => names.map(name =>{ 
    let nameArray = name.split(" ")
    const [firstName, lastName] = nameArray
    return {firstName,lastName}
    })

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

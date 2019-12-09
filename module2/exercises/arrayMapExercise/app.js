// const result = arr.map(num => num * 2)


// const result = arr.map(function(num){
//         const result = num * 2
//         return result
//     })

// // const doubleNumbers = () => {
// //     return 'hello'
// // }

// const someValue = arr.map(num => num * 2)

//   console.log(doubleNumbers([2, 5, 100])); 
  
//   const arr = ([2, 5, 100])
//   const strings = arr.map(function(num){
//       return num.toString()
//       })

  
//   console.log(strings); // ["2", "5", "100"]

//  const capitalizeNames = arr =>{
//     return arr.map(eachName => eachName.toUpperCase())  
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// const namesOnly = arr =>{
//     return arr.map(person => person.name.toString())
//    }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  


  const makeStrings = arr =>{
        return arr.map(person => person.age >= 18 ? person.name + " can go to the Matrix" : person.name + " is under age!!")
    }
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

  const readyToPutInTheDOM = arr =>{
        return arr.map(person => {
            return `<h1>${person.name}</h1>
                    <h2>${person.age}</h2>`
        })
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
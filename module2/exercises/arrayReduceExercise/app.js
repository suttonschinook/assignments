// const total = arr => arr.reduce((final, num) => final += num)
//  console.log(total([1,2,3])); 

// const stringConcat = arr => arr.reduce((final, num) => final + num, "")
// console.log(stringConcat([1,2,3]));

// const totalVotes = arr => arr.reduce((final, person) => person.voted ? final += 1 : final, 0) 
//  const voters = [
//      {name:'Bob' , age: 30, voted: true},
//      {name:'Jake' , age: 32, voted: true},
//      {name:'Kate' , age: 25, voted: false},
//      {name:'Sam' , age: 20, voted: false},
//      {name:'Phil' , age: 21, voted: true},
//      {name:'Ed' , age:55, voted:true},
//      {name:'Tami' , age: 54, voted:true},
//      {name: 'Mary', age: 31, voted: false},
//      {name: 'Becky', age: 43, voted: false},
//      {name: 'Joey', age: 41, voted: true},
//      {name: 'Jeff', age: 30, voted: true},
//      {name: 'Zack', age: 19, voted: false}
//  ];
//  console.log(totalVotes(voters));

// const shoppingSpree = arr => arr.reduce((final, item) => final + item.price, 0)
// const wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
// console.log(shoppingSpree(wishlist));

// const flatten = arr => arr.reduce((final, stuff) => [...final, ...stuff])
// console.log(flatten([["1", "2", "3"], [true], [4, 5, 6]])); 

const voterResults = arr => arr.reduce((final, person) => person.age <= 25 && !person.voted ? {...final, youth: final.youth += 1} : person.age <= 25 && person.voted ? {...final, youth: final.youth += 1, youngVotes: final.youngVotes += 1} : person.age >=26 && person.age <= 35 && !person.voted ? {...final, mids: final.mids +=1} : person.age >=26 && person.age <= 35 && person.voted ? {...final, mids: final.mids +=1, midVotes: final.midVotes += 1} : person.age >=36 && person.age <= 55 && !person.voted ? {...final, olds: final.olds +=1} : person.age >=36 && person.age <= 55 && person.voted ? {...final, olds: final.olds +=1, oldVotes: final.oldVotes += 1} :final, {
    youngVotes: 0,
    youth: 0,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0,

})

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(voterResults(voters))
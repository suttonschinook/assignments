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

const voterResults = arr => arr.reduce((final, person) => person.age <= 25 && person.voted ? final += "young vote:" + 1 : final)
console.log(voterResults([voters])); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/
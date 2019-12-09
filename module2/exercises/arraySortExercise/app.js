const leastToGreatest = arr => arr.sort((a,b) => a - b)
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

const greatestToLeast = arr => arr.sort((a,b) => b - a)
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

const lengthSort = arr => arr.sort((a,b) => a.length - b.length)
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

const alphabetical = arr => arr.sort((a, b) => a > b ?  1 :  -1)
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

const byAge = arr => arr.sort ((a, b) => a.age > b.age ? 1 : -1)
console.log(byAge([
      { name: "Quiet Samurai", age: 22 },
      { name: "Arrogant Ambassador", age: 100 },
      { name: "Misunderstood Observer", age: 2 },
      { name: "Unlucky Swami", age: 77 }
  ]));
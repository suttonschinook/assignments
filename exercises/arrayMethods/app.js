var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log("Vegetables:", vegetables)

fruit.shift()
console.log("Fruits:",fruit)

fruit.indexOf("orange")
console.log(fruit.indexOf("orange"))

fruit.push(1)
console.log("Fruits:", fruit)

console.log(vegetables.length)
vegetables.push(vegetables.length)

console.log("Vegetables:", vegetables)

var food = fruit.concat(vegetables)
console.log(food)

food.splice(4,2)
console.log(food)

food.reverse();
console.log(food)

food.join(", ");
console.log(food)
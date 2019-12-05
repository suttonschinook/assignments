// const largest = (...nums) => {
//     let maxSoFar = nums[0]
//     for (i = 0; i < nums.length;i++){
//         if (nums[i] > maxSoFar){
//             maxSoFar = nums[i]
//         }
//     }
//     return maxSoFar
// }
// console.log(largest(5,7,28,2,1,78, 1001, 4, 56))


const readline = require("readline-sync")
const letterToSearch = readline.question("What letter would you like to look for?  ")
const stringWithLetter = (...lettersWithStrings) => {
    let hasLetter = ""
    for (i = 0; i < lettersWithStrings.length; i++)
    if (lettersWithStrings[i].includes(letterToSearch)){
        hasLetter = lettersWithStrings[i]
    }else{
        console.log("That letter cannot be found")
    }
    return hasLetter
}
console.log(stringWithLetter("C#3", "$$$", "C%4!", "Hey!"))

// const divisible = (num1, num2) => {
//    if (num1 % num2 === 0){
//        return true
//    }else{
//        return false
//    }
// }
// console.log(divisible(12, 5))
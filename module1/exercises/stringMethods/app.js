const submitBtn = document.getElementById("button")

// submitBtn.addEventListener("click", function (e){
//     e.preventDefault()
//     const form = document.getElementById("form")
//     const input = document.getElementById("input").value
//     const upper = input.toUpperCase()
//     const lower = input.toLowerCase()
//     const both = upper.concat(lower)
//     const newItem = document.createElement("div")
//     form.appendChild(newItem)
//     newItem.textContent = both
// })

// submitBtn.addEventListener("click", function (e){
//     e.preventDefault()
//     const number = document.getElementById("number").value
//     const divide = number / 2
//     const result = Math.floor(divide)
//     const newNumber = document.createElement("div")
//     form.appendChild(newNumber)
//     newNumber.textContent = result
// })

// submitBtn.addEventListener("click", function (e){
//     e.preventDefault()
//     const form = document.getElementById("form")
//     const input = document.getElementById("input").value
//     console.log(input)
//     const half = input.slice(0, input.length / 2)
//     const together = half
//     console.log(half)
//     const newItem = document.createElement("div")
//     form.appendChild(newItem)
//     newItem.textContent = together
// })

submitBtn.addEventListener("click", function (e){
    e.preventDefault()
    const form = document.getElementById("form")
    const input = document.getElementById("input").value
    const firstHalf = input.slice(0, input.length / 2)
    const secondHalf =  input.slice(input.length / 2)
    const together = firstHalf.toUpperCase() + secondHalf.toLowerCase()
    const newItem = document.createElement("div")
    form.appendChild(newItem)
    newItem.textContent = together
})
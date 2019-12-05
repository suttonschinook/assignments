function sum (num1, num2, num3){
    var result = num1 * 5 + num2 * 7 + num3 * 11
    return result
}

var submitBtn = document.getElementById("submitBtn")
var moneyOwed = document.getElementById("moneyOwed")

submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    var num1 = document.getElementById("goombaNum").value
    var num2 = document.getElementById("bobOmbNum").value
    var num3 = document.getElementById("cheepCheepNum").value
    var addResult = document.createElement("div")
    moneyOwed.appendChild(addResult)
    addResult.classList.add("results")
    addResult.textContent = " The Princess owes you " + (sum(Number(num1), Number(num2), Number(num3)) + " coins of blood money for your murderous work")
})
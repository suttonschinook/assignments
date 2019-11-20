var add = document.getElementById("addBtn")

var sub = document.getElementById("subBtn")

var mul = document.getElementById("mulBtn")
var mul1 = document.mul1
var mul2 = document.mul2

function sum(add1, add2){
    var addInput = add1 + add2
    return addInput
}
function product(mul1, mul2){
    var mulInput = mul1 * mul2
    return mulInput
}
function difference(sub1, sub2){
    var subInput = sub1 - sub2
    return subInput
}

add.addEventListener("click", function(e){
    e.preventDefault()
    var add1 = document.getElementById("add1").value
    var add2 = document.getElementById("add2").value
    var addForm = document.getElementById("addition")
    var addResult = document.createElement("div")
    addForm.appendChild(addResult)
    addResult.classList.add("addResult")
    addResult.textContent = "The sum of the two numbers is " + sum(Number(add1), Number(add2))
})

sub.addEventListener("click", function(e){
    e.preventDefault()
    var sub1 = document.getElementById("sub1").value
    var sub2 = document.getElementById("sub2").value
    var subForm = document.getElementById("subtract")
    var subResult = document.createElement("div")
    subForm.appendChild(subResult)
    subResult.classList.add("subResult")
    subResult.textContent = "The remainder of the two numbers is " + difference(Number(sub1), Number(sub2))
})
mul.addEventListener("click", function(e){
    e.preventDefault()
    var mul1 = document.getElementById("mul1").value
    var mul2 = document.getElementById("mul2").value
    var mulForm = document.getElementById("multiply")
    var mulResult = document.createElement("div")
    mulForm.appendChild(mulResult)
    mulResult.classList.add("mulResult")
    mulResult.textContent = "The product of the two numbers is " + product(Number(mul1), Number(mul2))
})
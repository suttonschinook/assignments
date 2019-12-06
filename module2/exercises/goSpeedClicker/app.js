const form = document.form
const reset = document.getElementById("reset");
let count = localStorage.getItem("counter") || 0
document.getElementById("counter").textContent = count

form.addEventListener("submit", function(e){
    e.preventDefault()
    count++;
    document.getElementById("counter").textContent = count
    localStorage.setItem("counter", count)
    })

reset.addEventListener("click", function(e){
    e.preventDefault()
    count = 0;
    document.getElementById("counter").textContent = count
})
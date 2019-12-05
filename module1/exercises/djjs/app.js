var boxChange = document.getElementById("box");
console.log(boxChange)
boxChange.addEventListener("mouseover",function(e){
        e.target.style.backgroundColor = "blue"
})
boxChange.addEventListener("mouseout", function(e){
    e.target.style.backgroundColor = "aqua"
})
boxChange.addEventListener("mousedown",function(e){
    e.target.style.backgroundColor = "red"
})
boxChange.addEventListener("mouseup", function(e){
    e.target.style.backgroundColor = "yellow"
})
boxChange.addEventListener("dblclick", function(e){
    e.target.style.backgroundColor = "green"
})
boxChange.addEventListener("wheel", function(e){
    e.target.style.backgroundColor = "orange"
})
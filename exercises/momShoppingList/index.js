const submitBtn = document.getElementById("submit")


submitBtn.addEventListener("click", function (e){
    e.preventDefault()
    const newItem = document.getElementById("newItem")
    const list = document.getElementById("list")
    const newListItem = document.createElement("li")
    const newItems = document.createElement("div")
    const deleteButton = document.createElement("button")
    const editButton = document.createElement("button")
    list.appendChild(newListItem)
    newListItem.appendChild(newItems)
    newItems.textContent = newItem.value
    newListItem.appendChild(editButton)
    editButton.textContent = "edit"
    newListItem.appendChild(deleteButton)
    deleteButton.textContent = "X"
    const xButton = document.getElementsByTagName("button")
    for (i = 0; i < xButton.length; i++){
    xButton[i].addEventListener("click", function(e){
        if (e.target.textContent == "X"){
        e.target.parentNode.remove()
        }
    })
}

    })
const xButton = document.getElementsByTagName("button")    
for (i = 0; i < xButton.length; i++){
    xButton[i].addEventListener("click", function(e){
        if (e.target.textContent == "X"){
        e.target.parentNode.remove()
        }
    })
}
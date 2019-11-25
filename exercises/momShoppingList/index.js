const submitBtn = document.getElementById("submit")


submitBtn.addEventListener("click", function (e){
    e.preventDefault()
    const newItem = document.getElementById("newItem")
    const list = document.getElementById("list")
    const newListItem = document.createElement("li")
    const deleteButton = document.createElement("button")
    const editButton = document.createElement("button")
    list.appendChild(newListItem)
    newListItem.className = "newItem"
    newListItem.textContent = newItem.value
    newListItem.appendChild(editButton)
    editButton.textContent = "edit"
    newListItem.appendChild(deleteButton)
    deleteButton.textContent = "X"
    
})
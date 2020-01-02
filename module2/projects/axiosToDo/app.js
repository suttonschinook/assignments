const listTodos = () => {
    axios.get("https://api.vschool.io/evansutton/todo")
    .then (response => {
        for(i =0; i < response.data.length; i++){
            const unorderdList = document.createElement("span")
            unorderdList.setAttribute("id", response.data[i]._id)

            const checkbox = document.createElement('input')
            checkbox.setAttribute("type" ,"checkbox")

            const listItem = document.createElement("h1")
            listItem.textContent = response.data[i].title

            const itemImage = document.createElement("img")
            itemImage.setAttribute("id", "images")
            itemImage.src = response.data[i].imgUrl
            itemImage.style.width="200px"

            const completeBtn = document.createElement("BUTTON")
            completeBtn.setAttribute("id", "complete")
            completeBtn.textContent = "Complete"

            const deleteBtn = document.createElement("BUTTON")
            deleteBtn.setAttribute("id", "delete")
            deleteBtn.textContent = "DELETE"

            document.getElementById("display").appendChild(listItem)
            document.getElementById("display").appendChild(itemImage)
            document.getElementById("display").appendChild(checkbox)
            document.getElementById("display").appendChild(deleteBtn)
            console.log(unorderdList)
        }if (response.data.completed = false){
            listItem.style.textDecoration = "line-through"
        }
    })
    
    .catch (error => console.log(error))
}

// completeBtn.addEventListener("click", function(e){
//     e.preventDefault()
//     if (display.hasChildNodes.checkbox.checked = true){
        
//     }
// })

const form = document.form

form.addEventListener("submit", function(e){
    e.preventDefault()
    const newToDo = {
        title: form["new-item"].value,
        price: form["price"].value,
        description: form["description"].value,
        imgUrl: form["image"].value,
    }
    axios.post("https://api.vschool.io/evansutton/todo", newToDo)
    while (document.getElementById("display").hasChildNodes()){
    document.getElementById("display").removeChild([0])
    listTodos()
    }
})

listTodos()
const listTodos = () => {
    axios.get("https://api.vschool.io/evansutton/todo")
    .then (response => {
        for(i =0; i < response.data.length; i++){
            const unorderdList = document.createElement("ul")
            unorderdList.setAttribute("id", "ul")
            const listItem = document.createElement("li")
            listItem.textContent = response.data[i].title
            const itemImage = document.createElement("img")
            itemImage.setAttribute("id", "images")
            itemImage.imgUrl = response.data[i].imgUrl
            console.log(itemImage.imgUrl)
            document.getElementById("display").appendChild(listItem, itemImage)
        }if (response.data.completed = false){
            listItem.style.textDecoration = "line-through"
        }
    })
    
    .catch (error => console.log(error))
}

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
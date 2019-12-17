const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data)
        listPokemon(data.objects[0].pokemon)
    }else if(xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText)
    }
}

const listPokemon = arr => {
    arr.forEach(pokemon => {
        const individual = document.createElement("h1")
        individual.textContent = pokemon.name
        document.getElementsByClassName("pokedex")[0].appendChild(individual)
    });
}
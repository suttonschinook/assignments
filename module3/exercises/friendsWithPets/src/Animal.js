import React from "react"

function Animal(props){
    return(
        <div>
            <h2 class="petName">{props.animal.name}</h2>
            <h2 class="breed">{props.animal.breed}</h2>
        </div>
    )
}

export default Animal
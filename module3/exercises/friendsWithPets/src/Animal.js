import React from "react"

function Animal(props){
    return(
        <div>
            <h2>{props.animal.name}</h2>
            <h2>{props.animal.breed}</h2>
        </div>
    )
}

export default Animal
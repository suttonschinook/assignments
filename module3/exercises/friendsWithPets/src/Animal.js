import React, { Fragment } from "react"

function Animal(props){
    return(
        <>
            <h2 class="petName">{props.animal.name}</h2>
            <h2 class="breed">{props.animal.breed}</h2>
        </>
    )
}

export default Animal
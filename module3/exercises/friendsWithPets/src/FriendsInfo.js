import React from "react"
import Animal from "./Animal"

function FriendsInfo(props){
    const petArr = props.FriendsInfo.pets.map(animal => <Animal animal={animal} />)
    return(
        <div>
            <h2>{props.FriendsInfo.name}</h2>
            <h2>{props.FriendsInfo.age}</h2>
            {petArr}
        </div>
    )
}
export default FriendsInfo
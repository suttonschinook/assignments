import React from "react"
import friendsData from "./friendsData"
import FriendsInfo from "./FriendsInfo"

function App (){
    console.dir(friendsData)
    const friendsData = friendsData.map(person => <FriendsInfo key={person.id} person={person.name}/>)
    return(
        <div>
            <FriendsInfo />
        </div>
    )
}

export default App
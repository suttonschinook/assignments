import React from "react"
import friends from "./friendsData"
import FriendsInfo from "./FriendsInfo"

function App (){
    const friendList = friends.map(friends => <FriendsInfo FriendsInfo={friends}/>)
    return(
        <>
           {friendList}
        </>
    )
}

export default App
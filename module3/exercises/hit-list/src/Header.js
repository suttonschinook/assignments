import React from "react"

function Header (){
    const nameStyle ={
        display: "flex",
        justifyContent: "center",
        color: "red",
        fontSize: "50px"
    }
    return(
        <div style = {nameStyle}>
            <p>Don Vito Corleone's Hit list</p>
        </div>
    )
}

export default Header
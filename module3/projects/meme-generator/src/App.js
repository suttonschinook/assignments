import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import "./styles.css"

function App(){
    return(
        <React.Fragment>
            <Header />
            <MemeGenerator />
        </React.Fragment>
    )
}

export default App
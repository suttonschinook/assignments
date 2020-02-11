import React from "react"
import Header from "./Header"
import IPChecker from "./IPChecker"
import Map from "./Map"
import Results from "./Results"
import Footer from "./Footer"

function App(){
    const combo ={
        display: "flex",
        alignItems: "center",
        marginLeft: "10%",
    }
    return(
        <div>
            <Header />
            <IPChecker />
            <div style = {combo}>
                <Map />
                <Results />
            </div>
            <Footer />
        </div>
    )
}
export default App
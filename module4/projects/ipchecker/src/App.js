import React from "react"
import Header from "./Header"
import IPChecker from "./IPChecker"
import Map from "./Map"
import Footer from "./Footer"

function App(){
    return(
        <div>
            <Header />
            <IPChecker />
            <Map />
            <Footer />
        </div>
    )
}
export default App
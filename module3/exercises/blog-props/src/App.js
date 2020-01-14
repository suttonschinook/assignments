import React from "react"
import BlogPost from "./BlogPost"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./styles.css"

function App(){
    return(
        <div>
            <Header />
                <Navbar />            
            <BlogPost />
            <Footer /> 
        </div>
    )
}

export default App
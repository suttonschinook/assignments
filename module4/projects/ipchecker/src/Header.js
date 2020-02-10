import React from "react"

function Header (){
    const headerStyle ={
        display: "flex",
        height: "20vh",
        width: "100%",
        fontSize: "200%",
        justifyContent: "center",
        alignItems: "center",
        background: "#6441A5",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to right #1eeba6, #fff)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to right, #1eeba6, #fff)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        border: "2px solid black"
    }
    return(
        <header style = {headerStyle}>
            <h1>IP Checker v1.0</h1>
        </header>
    )
}
export default Header
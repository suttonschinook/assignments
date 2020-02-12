import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import ThermeProvider from "./context/ThemeProvider"

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>, 
    document.getElementById("root"))
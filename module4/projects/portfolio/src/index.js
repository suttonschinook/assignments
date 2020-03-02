import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import PortfolioContext from "./context/PortfolioContext"
import "./styles.css"

ReactDOM.render(
    <PortfolioContext>
        <App />
    </PortfolioContext>,
    document.getElementById("root"))
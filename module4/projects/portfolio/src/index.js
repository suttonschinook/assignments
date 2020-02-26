import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import PortfolioContex from "./context/PortfolioContext"
import "./styles.css"

ReactDOM.render(
    <PortfolioContex>
        <App />
    </PortfolioContex>,
    document.getElementById("root"))
import React from "react"
import {ThemeContext} from "./context/ThemeProvider"

export default function Main () {
    return(
        <ThemeContext>
            <p>This is the main body</p>
            <button onClick = {toggleTheme} >Change Theme</button>
        </ThemeContext>
    )
}
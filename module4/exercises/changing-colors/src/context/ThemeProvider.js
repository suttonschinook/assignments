import React, {useState} from "react"
export const ThemeContext = React.createContext()

export default function ThemeProvider(props){
    const colorTheme = useState({
        isLightTheme: true,
        lightTheme: { bg:"#333", color: "whitesmoke" },
        darkTheme: {bg:"#whitesmoke", color:"#333"}
    })

    toggleTheme = () => {
        
    }
}
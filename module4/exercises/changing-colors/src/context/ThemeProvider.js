import React, {useState} from "react"
export const ThemeContext = React.createContext()

export default function ThemeProvider(props){
    const colorTheme = useState({
        isLightTheme: true,
        darkTheme: { bg:"#333", color: "whitesmoke" },
        lightTheme: {bg:"#whitesmoke", color:"#333"}
    })

    toggleTheme = () => {
        {useState}=({!isLightTheme ? lightTheme : darkTheme)}

    }
    return(
        <ThemeContext.Provider
            value = {{
                ...colorTheme, 
                toggleTheme}}
        >
                {props.children}
        </ThemeContext.Provider>
    )
}
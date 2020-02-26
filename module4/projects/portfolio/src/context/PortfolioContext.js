import React, {useState} from "react"

export const PortfolioContex = React.createContext()

export default function PortfolioProvider(props){
    const [portfolioState, setPortfolioState] = useState({
        temp: ""
    })
    return(
        <PortfolioContex.Provider
            value={{...portfolioState}}
        >
            {props.children}
        </PortfolioContex.Provider>
    )
}
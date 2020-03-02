import React, {useState} from "react"

export const PortfolioContex = React.createContext()

export default function PortfolioProvider(props){
    let [portfolioState, setPortfolioState] = useState({
        date: "",
        hour: 0,
    })
    function currentDate(){
        let today = new Date()
        let time = today.getHours()
        setPortfolioState({
            date: today,
            hour: time,
        })

    }
    return(
        <PortfolioContex.Provider
            value={{...portfolioState, currentDate}}
        >
            {props.children}
        </PortfolioContex.Provider>
    )
}
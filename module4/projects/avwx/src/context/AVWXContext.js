import React, { useState } from "react"
export const AVWXContext = React.createContext()

export default function AVWXProvider(props){
    const [AVWXState, setAVWXState] = useState({
        icao: "KSLC",
    })
    return(
        <AVWXContext.Provider
            value={{
                ...AVWXState
            }}>
            {props.children}
        </AVWXContext.Provider>
    )
}
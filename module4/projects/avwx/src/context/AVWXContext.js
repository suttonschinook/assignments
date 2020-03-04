import React, { useState } from "react"
export const AVWXContext = React.createContext()

export default function AVWXProvider(props){
    const [AVWXState, setAVWXState] = useState({
        results:{},
    })

function getWX(){
    console.log(HTMLDivElement)
        fetch('https://api.checkwx.com/metar/kslc/decoded?pretty=1',{
            headers:{
                "x-api-key": process.env.REACT_APP_AVWX_APIKEY
            }
        })
        .then(response => response.json())
        .then(response => {
            setAVWXState({results: response.data})
        })
    }
    return(
        <AVWXContext.Provider
            value={{
                ...AVWXState, getWX
            }}>
            {props.children}
        </AVWXContext.Provider>
    )
}
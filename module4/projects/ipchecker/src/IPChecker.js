// https://api.iplegit.com/full?ip=1.1.1.1
// Need to build a function that allows input of IP address to check, receive response, display for the user

import React from "react"
import Map from "./Map"

class IPChecker extends React.Component{
    state = {

    }
    render(){
        return(
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Enter the questionable IP Address"
                    />
                </form>
                <Map />
            </div>
        )
    }
}
export default IPChecker

//
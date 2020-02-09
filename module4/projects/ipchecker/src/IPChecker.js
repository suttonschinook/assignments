// https://api.iplegit.com/full?ip=1.1.1.1
// Need to build a function that allows input of IP address to check, receive response, display for the user

import React from "react"

class IPChecker extends React.Component{
    state = {

    }
    render(){
        return(
            <form>
                <input 
                    type="text"
                    placeholder="Enter the questionable IP Address"
                />
            </form>
        )
    }
}
export default IPChecker

//AIzaSyDPXugV3IUyKcXLJ71ozh6VcW2rBWY8jXk
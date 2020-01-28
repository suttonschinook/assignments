import React from "react"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            loggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => {
            return {
                loggedIn: !prevState.loggedIn
            }
        })
    }

    render(){
        console.log(this.state.loggedIn)
        let buttonText = this.state.loggedIn ? "Log Out" : "Log In"
        let displayText = this.state.loggedIn ? "You are logged in Sucka" : "You are logged out Sucka"
        return (
            <div>
                <h1>{displayText}</h1>
                <button onClick = {this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}

export default App
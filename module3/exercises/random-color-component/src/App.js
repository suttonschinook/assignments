import React from "react"
const axios = require ("axios")

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            randomColor: ""
        }
        this.handleClick = this.handleClick.bind(this)
    }
   

    componentDidMount(){
        axios.get("http://www.colr.org/json/color/random")
        .then(response => response.data)
        .then(data => {
            this.setState({
                randomColor: data.colors[0].hex
            })
            console.log(data)
        })
    }

    render(){
        const backgroundColor ={
            backgroundColor: `#${this.state.randomColor}`
        }
        return(
            <div style = {backgroundColor}>
                <h1>Random Color Time</h1>
                <button onClick={this.handleClick}>Change the Color</button>
            </div>
        )
    }
}
export default App
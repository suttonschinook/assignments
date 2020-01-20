import React from "react"
import Square from "./Square"
import { render } from "react-dom";
import "./styles.css"

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            colors: ["white", "white", "white", "white"];
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick({
        this.setState(prevState.colors.map())
    })
}
render(){
    return(
        <div class="container">
            <Square color={this.state.colors[0]}/>
            <Square color={this.state.colors[1]}/>
            <Square color={this.state.colors[2]}/>
            <Square color={this.state.colors[3]}/>
        </div>
    )
}

export default App
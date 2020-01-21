import React from "react"
import RollingDice from "./RollingDice"
import "./styles.css"

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        
    }
    handleClick = () => {
        this.setState({
            num1: Math.floor(Math.random() * 6) + 1,
            num2: Math.floor(Math.random() * 6) + 1,
            num3: Math.floor(Math.random() * 6) + 1,
            num4: Math.floor(Math.random() * 6) + 1,
            num5: Math.floor(Math.random() * 6) + 1
        })
    }
    

    render(){
        const diceDisplay = {
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
        }
        const button ={
            gridColumn: "2 / 5",
            gridRow: "3 / 4",
            border: "3px solid black",
            borderRadius: "80%"
        }
        
        return(
                <div style = {diceDisplay}>
                    <RollingDice gridColumn = {"1 / 2"} gridRow = {"1 / 3"} num = {this.state.num1}/>
                    <RollingDice gridColumn = {"2 / 3"} gridRow = {"1 / 3"} num = {this.state.num2}/>
                    <RollingDice gridColumn = {"3 / 4"} gridRow = {"1 / 3"} num = {this.state.num3}/>
                    <RollingDice gridColumn = {"4 / 5"} gridRow = {"1 / 3"} num = {this.state.num4}/>
                    <RollingDice gridColumn = {"5 / 6"} gridRow = {"1 / 3"} num = {this.state.num5}/>
                    <button style = {button} onClick = {this.handleClick}>Roll The Dice SUCKA!</button>
                </div>
            )
    }
}

export default App
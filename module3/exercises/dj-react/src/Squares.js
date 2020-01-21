
import React from "react"
class Squares extends React.Component{
    render(){
        const square ={
            gridColumn: this.props.gridColumn,
            gridRow: this.props.gridRow,
            height: "400px",
            width: "auto",
            backgroundColor: this.props.color,
            border: "5px solid black"
        }
    
    return(
        <div>
            <div style={square}></div>
        </div>
    )
    }
}

export default Squares
import React from "react"

class RollingDice extends React.Component{
    render(){
        const dice ={
            display: "flex",
            gridColumn: this.props.gridColumn,
            gridRow: this.props.gridRow,
            height: "150px",
            width: "150px",
            backgroundColor: "white",
            border: "3px solid black",
            borderRadius: "15%",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "100px"
        }
        return(
            <div>
                <div style={dice}>{this.props.num}</div>
            </div>
        )
    }


}
export default RollingDice
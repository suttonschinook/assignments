import React from "react"
import Squares from "./Squares"
import "./styles.css"
class App extends React.Component{
    constructor(){
        super();
        this.state ={
            colors: ["white", "white", "white", "white"],
        }
    }
    changeAllSquareColor(){ 
        if(this.state.colors[0] === "white"){
            this.setState({ 
                colors: ["#3eb489", "#3eb489", "#3eb489", "#3eb489"]
            })
            } else { 
                this.setState({ 
                    colors: ["white", "white", "white", "white"]
                })
            }
          }
          changeTopTwoColors(){ 
            if(this.state.colors[0] === "white"){
              this.setState({ 
                  colors: ["magenta", "magenta", this.state.colors[2], this.state.colors[3]]
              })
              } else { 
                this.setState({ 
                  colors: ["white", "white", this.state.colors[2], this.state.colors[3]]
              }
                )}
            }
            changeBottomLeftColors(){ 
              if(this.state.colors[2] === "white"){
                this.setState({ 
                    colors: [this.state.colors[0], this.state.colors[1], "rebecca purple", this.state.colors[3]]
                })
                } else { 
                  this.setState({ 
                    colors: [this.state.colors[0], this.state.colors[1], "white", this.state.colors[3]]
                }
                  )}
              }
              changeBottomRightColors(){ 
                if(this.state.colors[3] === "white"){
                  this.setState({ 
                      colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "silver"]
                  })
                  } else { 
                    this.setState({ 
                      colors: [this.state.colors[0], this.state.colors[1], this.state.colors[2], "white"]
                  }
                    )}
                }
    render(){
        const gridStyle = {
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gridTemplateRow: "repeat(4,1fr)",
        }
            const button1 = {
                gridColumn: "1 / 2",
                gridRow: "3 /4",
            }
            const button2 = {
                gridColumn: "2 / 3",
                gridRow: "3 /4",
            }
            const button3 = {
                gridColumn: "1 / 2",
                gridRow: "4 / 5",
            }
            const button4 = {
                gridColumn: "2 / 3",
                gridRow: "4 / 5",
            }
            return(
                <div style={gridStyle}>
                    <Squares color={this.state.colors[0]} gridColumn ={ "1 / 2"} gridRow = {"1 / 2"}/>
                    <Squares color={this.state.colors[1]} gridColumn ={ "2 / 3"} gridRow = {"1 / 2"}/>
                    <Squares color={this.state.colors[2]} gridColumn ={ "1 / 2"} gridRow = {"2 / 3"}/>
                    <Squares color={this.state.colors[3]} gridColumn ={ "2 / 3"} gridRow = {"2 / 3"}/>
                    <button class="button1" style={button1} onClick = {this.changeAllSquareColor.bind(this)}>This May Do Something</button>
                    <button class="button2" style={button2} onClick = {this.changeTopTwoColors.bind(this)}>This May Do Something Else</button>
                    <button class="button3" style={button3} onClick = {this.changeBottomLeftColors.bind(this)}>This Should Do Something</button>
                    <button class="button4" style={button4} onClick = {this.changeBottomRightColors.bind(this)}>Don't Count On This To Work</button>
                </div>
            )
    }
}
    
export default App
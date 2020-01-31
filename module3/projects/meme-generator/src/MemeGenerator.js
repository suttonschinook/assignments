import React from "react"
import "./styles.css"

class MemeGenerator extends React.Component{
    constructor(){
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {name, value} = event.target
        this.setState({
            name: value
        })
        
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    allMemeImages: data
                })
            })
    }
    
    render(){
        return(
            <div>
                <form className="meme-form">
                    <imput
                        type = "text"
                        className = "topText"
                        name = "topText"
                        placeholder = "Top Text"
                        value = {this.state.topText}
                        onChange = {this.handleChange}
                    />
                    <input
                        type = "text"
                        className = "bottomText"
                        name = "bottomText"
                        placeholder = "Bottom Text"
                        value = {this.state.bottomText}
                        onChange = {this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} />
                    <h2 className ="top">{this.state.topText}</h2>
                    <h2 className ="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}
export default MemeGenerator
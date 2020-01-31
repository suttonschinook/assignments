import React from "react"
import "./styles.css"

class MemeGenerator extends React.Component{
    constructor(){
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: [],
            starWars:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.generateNewMeme = this.generateNewMeme.bind(this)
    }
    handleChange(e){
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        
    }
    generateNewMeme(e){
        e.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImages.length)
        const randomMemeImage = this.state.allMemeImages[randomNumber].url
        this.setState({ randomImage: randomMemeImage})
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ 
                    allMemeImages: memes
                })
            })
        }
    
    render(){
        return(
            <div>
                <form className="meme-form">
                    <input
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
                    <button onClick ={this.generateNewMeme}>Gen</button>
                </form>
                <div className="meme">
                    <img className = "memeImage" src={this.state.randomImage} />
                    <h2 className ="top">{this.state.topText}</h2>
                    <h2 className ="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}
export default MemeGenerator
import React from "react"
import "./styles.css"

class MemeGenerator extends React.Component{
    state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: [],
            starWars:[]
        }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
        
    }
    generateNewMeme = (e) => {
        e.preventDefault()
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImages.length)
        const randomMemeImage = this.state.allMemeImages[randomNumber].url
        this.setState({ randomImage: randomMemeImage})
    }

    componentDidMount = () => {
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
        const {topText, bottomText, randomImage} = this.state
        return(
            <React.Fragment>
                <form className="meme-form">
                    <input
                        type = "text"
                        className = "topText"
                        name = "topText"
                        placeholder = "Top Text"
                        value = {topText}
                        onChange = {this.handleChange}
                    />
                    <input
                        type = "text"
                        className = "bottomText"
                        name = "bottomText"
                        placeholder = "Bottom Text"
                        value = {bottomText}
                        onChange = {this.handleChange}
                    />
                    <button onClick ={this.generateNewMeme}>Gen</button>
                </form>
                <React.Fragment className="meme">
                    <img className = "memeImage" src={randomImage} />
                    <h2 className ="top">{topText}</h2>
                    <h2 className ="bottom">{bottomText}</h2>
                </React.Fragment>
            </React.Fragment>
        )
    }
}
export default MemeGenerator
import React from "react"
import "./styles.css"

class NameBadge extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            placeOfBirth:"",
            emailAddress: "",
            favFood: ""
        }
    }
    render(){
        const badgeStyle = {
            display: "flexbox",
            height: "300px",
            width: "680px",
            border: "2px solid black",
            borderRadius: "1%",
            marginLeft: "auto",
            marginRight: "auto",

        }
        const inputStyle = {
            border: "2px solid black",
            borderRadius: "1%",
            width: "250px",
            marginLeft: "55px",
            marginTop:"20px"
        }
        const aboutStyle ={
            marginTop: "20px",
            width: "561px",
            height: "100px",
            marginLeft: "55px",
            border: "2px solid black",
            borderRadius: "1%"
        }
        const formStyle = {
            display: "flexbox",
            alignItems: "center",
            justifyContent: "space-between"
        }
        const buttonStyle = {
            marginLeft: "43%",
            marginTop: "10px",
            width: "100px",
            border: "2px solid black",
            borderRadius: "1%"
           
        }
        return(
            <div style={badgeStyle}>
                <form style={formStyle}>
                    <input style = {inputStyle} placeholder="First Name"></input>
                    <input style = {inputStyle} placeholder="Last Name"></input>
                    <input style = {inputStyle} placeholder="Email"></input>
                    <input style = {inputStyle} placeholder="Place of Birth"></input>
                    <input style = {inputStyle} placeholder="Phone"></input>
                    <input style = {inputStyle} placeholder="Favorite Food"></input>
                    <textarea style = {aboutStyle} placeholder="Tell us about yourself " ></textarea>
                    <br/>
                    <button style = {buttonStyle} >Submit</button>
                </form>
            </div>
        )
    }
}

export default NameBadge
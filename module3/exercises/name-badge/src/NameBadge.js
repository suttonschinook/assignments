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
        return(
            <div>
                <form>
                    <input placeholder="First Name"></input>
                    <input placeholder="Last Name"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Place of Birth"></input>
                    <input placeholder="Phone"></input>
                    <input placeholder="Favorite Food"></input>
                    <input placeholder="Tell us about yourself "></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NameBadge
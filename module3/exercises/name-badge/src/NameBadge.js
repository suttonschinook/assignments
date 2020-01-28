import React from "react"
import "./styles.css"
import BadgeCard from "./BadgeCard"

class NameBadge extends React.Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            placeOfBirth:"",
            emailAddress: "",
            favFood: "",
            aboutMe: "",
            badges: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        this.setState(prevState => {
            const {firstName, lastName, phoneNumber, placeOfBirth, emailAddress, favFood, aboutMe} = prevState
            const newBadge= {
                firstName,
                lastName,
                phoneNumber,
                placeOfBirth,
                emailAddress,
                favFood,
                aboutMe
            }
            return{
                badges: [...prevState.badges, newBadge],
                firstName: "",
                lastName: "",
                phoneNumber: "",
                placeOfBirth:"",
                emailAddress: "",
                favFood: "",
                aboutMe: "",
            }
        })
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

        const mappedBadges = this.state.badges.map((badge, index) => {
            return(
                <BadgeCard  key = {index} {...badge} badgeStyle = {badgeStyle} buttonStyle = {buttonStyle} formStyle = {formStyle} aboutStyle = {aboutStyle} inputStyle = {inputStyle} />
            )
        })
        return(
            <div style={badgeStyle}>
                <form onSubmit = {this.handleSubmit} style={formStyle}>
                    <input value = {this.state.firstName} onChange = {this.handleChange} name = "firstName" style = {inputStyle} placeholder="First Name" minLength = "3" ></input>
                    <input value = {this.state.lastName} onChange = {this.handleChange}  name = "lastName" style = {inputStyle} placeholder="Last Name" minLength = "3"></input>
                    <input value = {this.state.emailAddress} onChange = {this.handleChange}  name = "emailAddress" style = {inputStyle} placeholder="Email" minLength = "3"></input>
                    <input value = {this.state.placeOfBirth} onChange = {this.handleChange}  name = "placeOfBirth" style = {inputStyle} placeholder="Place of Birth" minLength = "3"></input>
                    <input value = {this.state.phoneNumber} onChange = {this.handleChange} name = "phoneNumber" type = "number" style = {inputStyle} placeholder="Phone" minLength = "9"></input>
                    <input value = {this.state.favFood} onChange = {this.handleChange} name = "favFood" style = {inputStyle} placeholder="Favorite Food" minLength = "3"></input>
                    <textarea value = {this.state.aboutMe} onChange = {this.handleChange} name = "aboutMe" style = {aboutStyle} placeholder="Tell us about yourself "></textarea>
                    <br/>
                    <button style = {buttonStyle} >Submit</button>
                </form>
                {mappedBadges}
            </div>
        )
    }
}

export default NameBadge
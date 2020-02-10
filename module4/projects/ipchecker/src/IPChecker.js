// https://api.iplegit.com/full?ip=1.1.1.1
// Need to build a function that allows input of IP address to check, receive response, display for the user

import React from 'react'
import './styles.css'

class IPChecker extends React.Component{
    state = {
        ipAddress: "",
        ipInfo: {},
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://api.iplegit.com/full?ip='+this.state.ipAddress)
        .then(response => response.json())
        .then (response => {
            this.setState({
                ipInfo: response
            })
            console.log(this.state.ipInfo)
        })
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    render(){
        const formStyle = {
            display: 'flex',
            width: '100%',
            height: '25%',
            alignItems: "center",
            justifyContent: "center"     
        }
        const inputStyle = {
            height: '45px',
            width: '50%',
            fontSize: '125%'
        }
        const buttonStyle ={
            width: '25%',
            height: "50px",
            border: "2px solid black"
        }
        return(
            <div>
                <form style = {formStyle}>
                    <input style ={inputStyle}
                        type ='text'
                        placeholder = 'Enter the IP Address you wish to check'
                        name = 'ipAddress'
                        value = {this.ipAddress}
                        onChange = {this.handleChange}
                    />
                    <br/>
                    <button style = {buttonStyle} onClick = {this.handleSubmit}>Check IP Address</button>
                </form>
            </div>
        )
    }
}
export default IPChecker

//
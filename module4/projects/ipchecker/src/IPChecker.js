import React from 'react'
import './styles.css'

class IPChecker extends React.Component{
    state = {
        ipAddress: "",
        ipInfo: {},
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.iplegit.com/full?ip=${this.state.ipAddress}`)
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
        return(
            <div>
                <form className = "formStyle" onSubmit = {this.handleSubmit}>
                    <input className = "inputStyle"
                        type ='text'
                        placeholder = 'Enter the IP Address you wish to check'
                        name = 'ipAddress'
                        value = {this.ipAddress}
                        onChange = {this.handleChange}
                    />
                    <br/>
                    <button className ="buttonStyle">Check IP Address</button>
                </form>
            </div>
        )
    }
}
export default IPChecker

//
// https://api.iplegit.com/full?ip=1.1.1.1
// Need to build a function that allows input of IP address to check, receive response, display for the user

import React from 'react'
import Map from './Map'
import './styles.css'

class IPChecker extends React.Component{
    state = {
        ipAddress: "",
        ipInfo: {},
    }
    handleSubmit = () => {
        fetch('https://api.iplegit.com/full?ip=${ipAddress}')
        .then (response = response.json())
        .then (response => {
            const {info} = response.data
            this.setState({
                ipInfo: info
            })
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
            marginRight: '25%',
            marginLeft: '25%',        
        }
        const inputStyle = {
            height: '50px',
            width: '50%',
            fontSize: '125%'
        }
        const buttonStyle ={
            width: '25%'
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
                    <button onSubmit = {this.handleSubmit}>Check IP Address</button>
                </form>
                <Map />
            </div>
        )
    }
}
export default IPChecker

//AIzaSyDPXugV3IUyKcXLJ71ozh6VcW2rBWY8jXk
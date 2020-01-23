import React from"react"

class NameEntry extends React.Component{
    constructor(){
        super();
        this.state ={
            firstName: "",
            lastName: "",
            namesList: []
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})  
        }
    handleClick = (e) => {
        e.preventDefault()
        const fullName = this.state.firstName + " " + this.state.lastName
        this.setState(prevState => ({
            namesList: [...prevState.namesList, fullName],
            firstName: "",
            lastName: ""
        }))
    }
    eraseStuff = (e) => {
        this.setState({
            namesList: []
        })
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleClick}>
                    <input
                    name = "firstName"
                    placeholder="Enter Your First Name"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    />
                    <input
                    name = "lastName"
                    placeholder="Enter Your Last Name"
                    type="text"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    />
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <button>Click</button>
                </form>
                {this.state.namesList.map(name => <h1>{name}</h1>)}
                <button onClick ={this.eraseStuff}>Erase the List</button>
            </div>
        )
    }
}
export default NameEntry
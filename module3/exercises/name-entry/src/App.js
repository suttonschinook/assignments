import React from"react"

class NameEntry extends React.Component{
    constructor(){
        super();
        this.state ={
            firstName: "",
            lastName: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){

    }
    render(){
        return(
            <form>
                <h1></h1>
                <button>Click</button>
            </form>
        )
    }
}
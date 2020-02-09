import React from "react"

class Foaas extends React.Component {
    state = {
        fuckOffs: []
    }
    componentDidMount = () => {
        fetch("https://www.foaas.com/off")
        .then (response => response.json())
        .then (response => {
            const {fuckOffsList} = response.data
            this.setState({
                fuckOffs: fuckOffsList
            })
            console.log(this.state.fuckoffs)
        })
    }
    
    render(){
        return(
            <div>

            </div>
        )
    }
}
export default Foaas
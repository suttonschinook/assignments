import GoogleMapReact from 'google-map-react'
import React from "react"

class Map extends React.Component{
    state = {
        center: {lat: 40.765925, lng: -111.888657}, 
        zoom: 14
    }
    render(){
        const mapStyle = {
            width: "700px",
            height: "500px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "20px",
            border: "5px solid black"
        }
        return(
            <div style = {mapStyle}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "", 
                        language: 'en'
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    // onChildMouseEnter={this.onChildMouseEnter}
                    // onChildMouseLeave={this.onChildMouseLeave}
                />
            </div>
        )
    }

    static defaultProps = {
        center: {lat: 40.765925, lng: -111.888657}, 
        zoom: 14
     }
}
export default Map
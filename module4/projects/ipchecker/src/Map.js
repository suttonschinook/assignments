import GoogleMapReact from 'google-map-react'
import React from "react"

class Map extends React.Component{
    state = {
        center: "",
        defaultZoom: 8
    }
    render(){
        return(
            <div>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyDPXugV3IUyKcXLJ71ozh6VcW2rBWY8jXk", 
                        language: 'en'
                    }}
                    defaultCenter={this.props.center}
                    center={this.state.center}
                    defaultZoom={this.props.zoom}
                    onChildMouseEnter={this.onChildMouseEnter}
                    onChildMouseLeave={this.onChildMouseLeave}
                />
            </div>
        )
    }

    static defaultProps = {
        center: {lat: 40.765925, lng: -111.888657}, 
        zoom: 8
     }
}
export default Map
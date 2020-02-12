import GoogleMapReact from 'google-map-react'
import React, {useContext} from "react"
import {IPInfoContext} from "./context/IPInfoProvider"

export default function Map(){
    const value = useContext(IPInfoContext)
    return(
        <div className = "mapStyle">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "", 
                    language: 'en'
                }}
                center={value.center}
                zoom={value.zoom}
                // onChildMouseEnter={this.onChildMouseEnter}
                // onChildMouseLeave={this.onChildMouseLeave}
            />
        </div>
    )
}
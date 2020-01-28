import React from "react"
import "./styles.css"

function BadgeCard(props){
    console.log(props)
    return(
        <div style = {props.badgeStyle.badgeStyle}>
            <div>{props.firstName}</div>
            <div>{props.lastName}</div>
            <div>{props.favfood}</div>
            <div>{props.phoneNumber}</div>
            <div>{props.placeOfBirth}</div>
            <div>{props.emailAddress}</div>
            <div>{props.aboutMe}</div>
        </div>
    )
}

export default BadgeCard
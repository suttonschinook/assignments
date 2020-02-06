import React from "react"
import "./styles.css"

function BadgeCard(props){
    console.log(props)
    return(
        <React.Fragment style = {props.badgeStyle}>
            <React.Fragment style = {props.inputStyle}>{props.firstName}</React.Fragment>
            <React.Fragment style = {props.inputStyle}>{props.lastName}</React.Fragment>
            <React.Fragment style = {props.inputStyle}>{props.favfood}</React.Fragment>
            <React.Fragment style = {props.inputStyle}>{props.phoneNumber}</React.Fragment>
            <React.Fragment style = {props.inputStyle}>{props.placeOfBirth}</React.Fragment>
            <React.Fragment style = {props.inputStyle}>{props.emailAddress}</React.Fragment>
            <React.Fragment style = {props.aboutStyle}>{props.aboutMe}</React.Fragment>
        </React.Fragment>
    )
}

export default BadgeCard
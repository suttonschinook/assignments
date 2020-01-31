import React from "react"
import "./styles.css"

function BadgeCard(props){
    console.log(props)
    return(
        <div style = {props.badgeStyle}>
            <div style = {props.inputStyle}>{props.firstName}</div>
            <div style = {props.inputStyle}>{props.lastName}</div>
            <div style = {props.inputStyle}>{props.favfood}</div>
            <div style = {props.inputStyle}>{props.phoneNumber}</div>
            <div style = {props.inputStyle}>{props.placeOfBirth}</div>
            <div style = {props.inputStyle}>{props.emailAddress}</div>
            <div style = {props.aboutStyle}>{props.aboutMe}</div>
        </div>
    )
}

export default BadgeCard
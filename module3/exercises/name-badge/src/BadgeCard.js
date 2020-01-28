import React from "react"
import "./styles.css"

function BadgeCard(props){
    console.log(props)
    return(
        <div style = {props.badgeStyle.badgeStyle}>
            <div style = {props.badgeStyle.inputStyle}>{props.firstName}</div>
            <div style = {props.badgeStyle.inputStyle}>{props.lastName}</div>
            <div style = {props.badgeStyle.inputStyle}>{props.favfood}</div>
            <div style = {props.badgeStyle.inputStyle}>{props.phoneNumber}</div>
            <div style = {props.badgeStyle.inputStyle}>{props.placeOfBirth}</div>
            <div style = {props.badgeStyle.inputStyle}>{props.emailAddress}</div>
            <div style = {props.badgeStyle.aboutStyle}>{props.aboutMe}</div>
        </div>
    )
}

export default BadgeCard
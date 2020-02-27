import React from "react"
import styled from "styled-components"

const NavBar = styled.div`
    display: flex;
    height: 5vh;
    background-color: whitesmoke;
    justify-content: space-evenly;
    align-items: center;
`
const StyledAnchor = styled.a`
    font-family: 'Roboto';
`
export default function Navbar(){
    return(
        <NavBar>
            <StyledAnchor>Home</StyledAnchor>
            <StyledAnchor>About</StyledAnchor>
            <StyledAnchor>Portfolio</StyledAnchor>
            <StyledAnchor>GitHub</StyledAnchor>
            <StyledAnchor>Resume</StyledAnchor>

        </NavBar>
    )
}
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
    font-family: Oswald;
    opacity: 0.7;
`
export default function Navbar(){
    return(
        <NavBar>
            <StyledAnchor>Home</StyledAnchor>
            <StyledAnchor>About</StyledAnchor>
            <StyledAnchor>Portfolio</StyledAnchor>
            <StyledAnchor href="https://github.com/suttonschinook" target="_blank"><img src="http://pngimg.com/uploads/github/github_PNG83.png" height="30px"/></StyledAnchor>
            <StyledAnchor href="https://www.linkedin.com/in/evan-c-sutton/" target="_blank"><img src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG39.png" height="30px"/></StyledAnchor>
            <StyledAnchor>Resume</StyledAnchor>

        </NavBar>
    )
} 
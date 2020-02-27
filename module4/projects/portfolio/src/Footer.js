import React from "react"
import styled from "styled-components"

const StyledFooter = styled.div`
    display: grid;
    height: 10vh;
    background-color: black;
`

export default function Footer(){
    return(
        <StyledFooter className="footer">
            <p>This is the Footer</p>
        </StyledFooter>
    )
}
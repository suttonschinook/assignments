import React from "react"
import styled from "styled-components"

const HeaderStyled = styled.header`
    display: flex;
    background-color: black;
    height: 15vh;
    align-items: center;
    justify-content: center;
    font-family: 'Merriweather';
    font-weight: 700;
    font-size: 50px;
    color: whitesmoke;
`

export default function Header(){
    return(
        <HeaderStyled>
            <p>EVAN SUTTON</p>
        </HeaderStyled>
    )
}
import React from "react"
import styled from "styled-components"

const StyledMain = styled.div`
    display: flex;
    height: 75vh;
    position: relative;
    width: 100%;
`
const StyledForm = styled.form`

`
const StyledBackground = styled.div`
    position: absolute;
    background-image: url("https://images.unsplash.com/photo-1527354372664-ae0112ab2c41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9");
    z-index: -1;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 1080px;
    opacity: 0.5;
    
`

const StyledInput = styled.input`
    display: flex;
    height: 50px;
    width: 100px;
`
const StyledButton = styled.button`
    display: flex;
    height: 25px;
    width: 100px;
`
export default function Main(){
    return(
        <StyledMain>
            <StyledBackground>
            <StyledForm>
                <StyledInput placeholder="ICAO"></StyledInput>
                <StyledButton>Click</StyledButton>
            </StyledForm>
            </StyledBackground>
        </StyledMain>
    )
}
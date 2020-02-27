import React from "react"
import styled from "styled-components"

const Home = styled.main`
    display: grid;
    background-color: #B5FFE5;
    height: 70vh;
    background-image: url('https://images.unsplash.com/flagged/photo-1565896209840-a18b89dd65d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80');

`

export default function Main(){
    return(
        <Home>
            <p>This is the Home content</p>
        </Home>
    )
}
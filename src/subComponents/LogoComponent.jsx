import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.$color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;

@media (max-width: 768px) {
  left: 1rem;
  top: 1rem;
  font-size: 1.5rem;
}
`

const LogoComponent = (props) => {
    return (
        <Logo $color={props.theme}>
          RP
        </Logo>
    )
}

export default LogoComponent

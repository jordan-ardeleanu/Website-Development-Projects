import React from "react"
import { NavLink } from 'react-router-dom';
import styled from "styled-components"

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: start;
    align-items: center;  
`
const UlWrapper = styled.ul`
    display: flex;
    list-style: none;
    position: absolute;
    right: 0;
    top: 4%;
`
const Title = styled.h1`
    font-size: 3rem;
`
const ListItems = styled.li`
    margin-right: 150px;
    font-size: 2rem;
    text-decoration:none;
`
const Header = (props) => {
return(
    <HeaderWrapper>
        <Title>Fruit Emporium</Title>
        <nav>
            <UlWrapper>
                <ListItems>
                    <NavLink exact to="/" activeStyle={
                    {
                        color:"#FF0F7B",
                        fontWeight: "bold",
                        textDecoration: "underline"
                    }
                    }>Home</NavLink>
                    </ListItems>
                    <ListItems>
                    <NavLink to="/about" activeStyle={
                    {
                        color:"#FF0F7B",
                        fontWeight: "bold",
                        textDecoration: "underline"
                    }
                    }>About</NavLink>
                </ListItems>
            </UlWrapper>
        </nav>
    </HeaderWrapper>
)
}

export {Header}
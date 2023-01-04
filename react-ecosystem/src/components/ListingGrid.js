import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';




const StyledImg = styled.img`
    width: 200px;
    border-radius: 10px;
    margin-top: -15px;
`
const ItemDisplay = styled.div`
    a {
        text-decoration: none;
        color: black;
    }
    display: inline-block;
    width: 25%;
    text-align: center;
    margin: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 30px 5px lightgray;
    height: 400px;
`
const H2 = styled.h2`
    font-size: 2.5rem;
    color: black;
`
const P = styled.p`
    font-size: 1.7rem;
    color: gray;
    font-style: italic;
`

const ListingGrid = ({ itemList}) => {
    return (
        itemList.map((item) => {
            return (
            <ItemDisplay key={Math.random()* 10000000}>
                <Link to={`/items/${item.id}`}>
                    <StyledImg src={item.imageSrc} alt="An image of a fruit"/>
                    <H2>{item.name}</H2>
                    <P>{item.latinName}</P>
                </Link>
            </ItemDisplay>
            )
        })
    )
}

ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        latinName: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
    })
    ).isRequired,
};

export {ListingGrid}
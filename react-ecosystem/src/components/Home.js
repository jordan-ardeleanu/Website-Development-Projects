import React from "react"
import styled from "styled-components"
import { items } from "../data"
import {ListingGrid} from "./ListingGrid"

const FirstText = styled.p`
    font-size: 2rem;
`
const Browse = styled.p`
    font-size: 2rem;
    font-weight: bolder;
`
const SectionWrapper = styled.section`
    width:90%;
    margin: auto;
`

const Home = (props) => {
    let itemArr = Object.values(items)

    return (
        <SectionWrapper>
            <FirstText>Fruit emporium sells the finest fruits from this world and beyond.</FirstText>
            <Browse>Browse items:</Browse>
            <ListingGrid itemList={itemArr}/>
        </SectionWrapper>
    )
}

export { Home }
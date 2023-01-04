import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { items, sellers } from "../data";

const FruitCardContainer = styled.div`
    width: 90%;
    margin: 50px auto;
    display: flex;
    
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const SellerContainer = styled.div`
    display: flex;
    margin-top: 40px;
`

const StyledImg = styled.img`
    width: 700px;
    border-radius: 10px;
    margin-right: 75px;
`
const P = styled.p`
    font-size: 2rem;
`
const H1 = styled.h1`
    font-size: 4rem;
`
const GrayP = styled.p`
    font-size: 2rem;
    color: gray;
    font-style: italic;
    font-size: 2rem;
`
const Button = styled.button`
    background-color: purple;
    width: 400px;
    height:100px;
    color: #FFF;
    border-radius: 20px;
    border: 0px;
    font-size: 2rem;
`

const SellerImg = styled.img`
    width: 90px;
    border-radius: 50%;
`
const Span = styled.span`
    font-weight: bolder;
`

const ItemDetails = () => {
    const { itemId } = useParams();
    let outOfStock = false;

    let itemReturned = Object.values(items).find((item) => {
    if (item.id === itemId) {
        return true;
    }
});

if (itemReturned.quantity === 0) {
    outOfStock = true;
}

const seller = sellers[itemReturned.sellerId];

console.log(seller)
return (
    <FruitCardContainer>
        <StyledImg src={itemReturned.imageSrc} alt=""/>
        <div>
            <H1>{itemReturned.name}</H1>
            <GrayP>{itemReturned.latinName}</GrayP>
            <P>{itemReturned.description}</P>
            <GrayP>Product of <Span>{itemReturned.countryOfOrigin}</Span> </GrayP>
            {outOfStock ? <P>Out of Stock</P> : <Button>${itemReturned.price} - Buy now</Button> }
            <SellerContainer>
                <SellerImg src={seller.avatarSrc} alt=""/>
                <P>Sold by: <Span>{seller.storeName}</Span></P>
            </SellerContainer>
        </div>
    </FruitCardContainer>
)
};

export { ItemDetails };
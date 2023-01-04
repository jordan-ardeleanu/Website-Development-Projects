import React, { useState } from "react";
import styled from "styled-components";


const SuggestionsListed = ({ suggestion, searchValue, category}) => {

    const matchIndex =  suggestion.title 
        .toLowerCase()
        .indexOf(searchValue.toLowerCase())
    const matchEnd = matchIndex + searchValue.length;
    const firstHalf = suggestion.title.slice(0, matchEnd)
    const secondHalf = suggestion.title.slice(matchEnd)

return( 
    <>
        {firstHalf}
        <BoldSpan>{secondHalf}</BoldSpan> {" "}
        <Caption>
            in <CategoryName>{category.name}</CategoryName>
        </Caption>
    </>
)
};


const BoldSpan = styled.span`
    font-weight: bolder;
`

const CategoryName = styled.span`
    font-weight: bolder;
    color: purple;
`

const Caption = styled.em`
    opacity: 0.75;
    font-size: 1.2rem;
`

export { SuggestionsListed };
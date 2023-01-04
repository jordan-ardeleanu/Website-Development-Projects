import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Items = ({ items, numOwned, handleClick }) => {
const itemRef = useRef(null);

useEffect(() => {
    itemRef.current.focus();
}, []);

return (
    <>
        {items.map((item, index) => {
        return (
            <ItemWrapper key={index}>
                <div>
                    <Button
                    value={item.id}
                    onClick={(e) => handleClick(e.target.value)}
                    ref={index === 0 ? itemRef : null}
                    >
                    {item.name}
                    </Button>
                    <p>
                    Cost: {item.cost} cookie(s). Produces {item.value}
                    {item.id === "megaCursor"
                        ? "more cookie/clicks"
                        : "cookies/second"}
                    </p>
                </div>
                <AmountDisplay>{numOwned[item.id]}</AmountDisplay>
            </ItemWrapper>
        );
        })}
    </>
);
};

const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AmountDisplay = styled.div`
    align-self: center;
    margin-left: 25px;
`;

const Button = styled.button`
    color: yellow;
    background-color: transparent;
    border: 0px;
    min-width: 100px;
    min-height: 40px;
    font-size: 1.5rem;
    text-align: start;
    &:hover {
    cursor: pointer;
}
`;

export default Items;
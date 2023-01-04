import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useKeyDown } from "../hooks/useKeyDown";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import Items from "./Items";
import useInterval from "../hooks/use-interval.js";

import cookieSrc from "../cookie.svg";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1 },
  { id: "grandma", name: "Grandma", cost: 100, value: 10 },
  { id: "farm", name: "Farm", cost: 1000, value: 80 },
];

const Game = () => {
  const [numCookies, setNumCookies] = useState(100);
  const [purchasedItems, setPurchasedItems] = useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
    megaCursor: 0,
  });

  console.log(purchasedItems.megaCursor);

  const calculateCookiesPerTick = () => {
    let total = 0;
    let arrayOfItemsAmount = Object.values(purchasedItems);
    total += arrayOfItemsAmount[0] * 1;
    total += arrayOfItemsAmount[1] * 10;
    total += arrayOfItemsAmount[2] * 80;
    return total;
  };

  useInterval(() => {
    const numberOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);
    setNumCookies(numCookies + numberOfGeneratedCookies);
  }, 1000);

  const handleClick = (value) => {
    let itemToChange = items.find((item) => {
      return item.id === value;
    });

    if (numCookies < itemToChange.cost) {
      window.alert("Can't buy that");
      return;
    }
    if (!itemToChange) {
      return "Invalid value";
    }
    setNumCookies(numCookies - itemToChange.cost);
    setPurchasedItems({
      ...purchasedItems,
      [value]: purchasedItems[value] + 1,
    });
    itemToChange.cost += Math.floor(Math.random() * (5 - 2) + 2);
  };

  useDocumentTitle(`${numCookies} cookies`, "Cookie Generator");

  useKeyDown("Space", () => {
    setNumCookies(numCookies + 1 + purchasedItems.megaCursor);
  });

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          <strong>{calculateCookiesPerTick()}</strong> cookies per second
        </Indicator>
        <Button>
          <Cookie
            src={cookieSrc}
            onClick={() =>
              setNumCookies(numCookies + 1 + purchasedItems.megaCursor)
            }
          />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        <Items
          items={items}
          key={items.name}
          numOwned={purchasedItems}
          handleClick={handleClick}
          firstItem={items[0]}
        />
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

const BoldSpan = styled.span`
    font-weight: bold;
`

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: #666;
`;

export default Game;

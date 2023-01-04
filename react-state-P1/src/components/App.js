import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Button from "./Button";
import Deadman from "./DeadMan";
import DeadLetters from "./DeadLetters";
import TheWord from "./TheWord";
import Keyboard from "./Keyboard";
import GameOverModal from "./GameOverModal";
import words from "../data/words.json";

import { colors, contentWidth } from "./GlobalStyles";

const initialGameState = {
  started: false,
  over: false,
  win: false,
  pause: false,
};

const App = () => {
  //Implementing Hooks
  const [game, setGame] = useState(initialGameState);
  const [word, setWord] = useState({ str: "" });
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  console.log(usedLetters)
  const getWord = () => {
    let buttonText = "";

    if (game.started === true) {
      buttonText = "Pause";
    } else if (word.str.length > 0) {
      buttonText = "Continue";
    } else {
      buttonText = "Start";
    }
    return buttonText;
  };
  const getNewWord = () => {
    let random = words[Math.floor(Math.random() * words.length)];
    let revealed = [];
    for (let i = 0; i < random.length; i++) {
      revealed.push("");
    }
    setWord({
      ...word,
      str: random,
      revealed: revealed,
    });
  };

  const handleStart = () => {
    setGame({
      ...game,
      started: !game.started,
    });
    if (word.str === "") {
      getNewWord();
    }
  };

  const handleGuess = (ltr) => {
    setUsedLetters([...usedLetters, ltr]);
    if (word.str.indexOf(ltr) === -1) {
      setWrongGuesses([...wrongGuesses, ltr]);
    } else {
      for (let i = 0; i < word.str.length; i++) {
        if (word.str[i] === ltr) {
          word.revealed.splice(i, 1, ltr);
        }
      }
    }
    if (wrongGuesses.length >= 9) {
      handleEndGame(false);
    }
    if (
      word.revealed.every((letter) => {
        if (letter !== "") {
          return true;
        }
      })
    ) {
      handleEndGame(true);
    }
  };

  const handleReset = () => {
    setGame({ ...game, started: true, pause: false });
    setWord({ str: "", revealed: [] });
    getNewWord();
    setWrongGuesses([]);
    setUsedLetters([]);
  };

  const handleEndGame = (win) => {
    setGame({ ...game, over: !game.over });
    if (win === true) {
      setGame({ ...game, win: !game.win });
      alert("Good Job!");
    } else {
      alert("You Loose -_-");
    }
  };

  return (
    <Wrapper>
      {/* <GameOverModal /> */}
      <Header />
      <Nav>
        <Button onClickFunc={handleStart}>{getWord()}</Button>
        <Button onClickFunc={handleReset}>Reset</Button>
      </Nav>
      {game.started && (
        <>
          <Container>
            <Deadman />
            <RightColumn>
              <DeadLetters
                wrongGuesses={wrongGuesses}S
                key={Math.random() * 10000}
              />
              <TheWord word={word} key={Math.random() * 10000} />
            </RightColumn>
          </Container>
          <Keyboard
            usedLetters={usedLetters}
            handler={handleGuess}
            key={Math.random() * 10000}
          />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.blue};
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  height: 100vh;
  padding: 0 0 64px 0;
`;
const Nav = styled.div`
  max-width: ${contentWidth};
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${contentWidth};
  min-width: 320px;
  position: relative;
  padding: 20px 0;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

export default App;
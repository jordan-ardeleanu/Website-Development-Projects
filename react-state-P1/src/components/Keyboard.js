import styled from "styled-components";
import LetterKey from "./LetterKey";
import letters from "../data/letters.json";


import { colors, contentWidth } from "./GlobalStyles";

const Keyboard = ({handler, usedLetters}) => (
  <Wrapper>
    {letters.map((letter) => {
      console.log(usedLetters)
      let alreadyUsed = usedLetters.includes(letter);
      return <LetterKey value={letter} handler={handler} alreadyUsed={alreadyUsed}/>
    })}
  </Wrapper>
);


const Wrapper = styled.div`
  background: ${colors.yellow};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px 12px;
  max-width: ${contentWidth};
  min-width: 320px;
`;

export default Keyboard;

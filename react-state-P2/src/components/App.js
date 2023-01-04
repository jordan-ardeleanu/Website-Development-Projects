import React from 'react';
import data from "../data"
import GlobalStyles from './GlobalStyles';
import styled from "styled-components";
import {Typeahead} from "./Typeahead"


const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
        suggestionslisted={data.books}
        categories={data.categories}
        handleSelect={ (suggestion)=> {
          window.alert(suggestion)
        }} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 80%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;

export default App;
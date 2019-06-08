import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import media from '../utils/style/media';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.medium`
    flex-direction: column-reverse;
  `};

  button {
    width: 3rem;
    height: 3rem;
    margin: 0 1rem;
    cursor: pointer;
  }
`;

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <Container>
      <Helmet>
        <title>Counter</title>
      </Helmet>
      <h2>Never seen before counter!</h2>
      <Content>
        <button type="button" onClick={decreaseCounter}>-</button>
        <h1>{counter}</h1>
        <button type="button" onClick={increaseCounter}>+</button>
      </Content>
    </Container>
  );
};

export default Counter;

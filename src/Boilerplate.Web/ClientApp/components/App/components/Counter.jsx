import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import media from '../utils/style/media';
import { PRIMARY } from '../utils/style/variables';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.medium`
    flex-direction: column-reverse;
  `};
`;

const Button = styled.button`
  width: 3rem;
  height: 3rem;
  color: ${PRIMARY.colour};
  font-size: larger;
  background: ${PRIMARY.background};
  border: 2px solid ${PRIMARY.colour};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: ${PRIMARY.colour};
    color: ${PRIMARY.background};
  }
`;

const Count = styled.h1`
  width: 5rem;
`;

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <Container>
      <Helmet>
        <title>Counter</title>
      </Helmet>
      <h1>Simple Counter</h1>
      <Section>
        <Button type="button" onClick={decrementCounter}>-</Button>
        <Count>{counter}</Count>
        <Button type="button" onClick={incrementCounter}>+</Button>
      </Section>
    </Container>
  );
};

export default Counter;

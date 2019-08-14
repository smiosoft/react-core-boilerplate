import React, { useState } from 'react';
import styled from 'styled-components';

import { PRIMARY } from '../../utils/style/variables';
import media from '../../utils/style/media';
import { Page } from '../layout';
import { Title } from '../shared';

const Italics = styled.i`
  text-align: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${media.small`
    flex-direction: column-reverse;
  `};
`;

const Count = styled.h1`
  width: 5rem;
  text-align: center;
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

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Page title="Counter">
      <Title text="Counter" />
      <Italics>Simple counter app.</Italics>
      <Section>
        <Button type="button" onClick={() => setCounter(counter - 1)}>-</Button>
        <Count>{counter}</Count>
        <Button type="button" onClick={() => setCounter(counter + 1)}>+</Button>
      </Section>
    </Page>
  );
};

export default Counter;

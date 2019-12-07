import React, { useState } from 'react';
import styled from 'styled-components';

import { PRIMARY, SECONDARY } from '../../utils/style/colours';
import media from '../../utils/style/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Value = styled.div`
  min-width: 5rem;
  padding: 0 1rem;
  text-align: center;
  font-size: x-large;
`;

const Button = styled.button`
  margin: .25rem;
  width: 3rem;
  height: 3rem;
  color: ${PRIMARY.colour};
  font-size: larger;
  background: ${SECONDARY.background};
  border: 2px solid ${PRIMARY.highlight};
  border-radius: 50%;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${PRIMARY.highlight};
    color: ${SECONDARY.background};
  }
`;

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <Wrapper>
      <h1>Counter</h1>
      <Section>
        <Button type="button" onClick={() => setValue(value - 10)}>--</Button>
        <Button type="button" onClick={() => setValue(value - 1)}>-</Button>
        <Value>{value}</Value>
        <Button type="button" onClick={() => setValue(value + 1)}>+</Button>
        <Button type="button" onClick={() => setValue(value + 10)}>++</Button>
      </Section>
    </Wrapper>
  );
};

export default Counter;

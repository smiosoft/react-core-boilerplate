import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Emoji = styled.div`
  font-size: 10rem;
`;

const Home = () => (
  <Wrapper>
    <h1>React Core Boilerplate</h1>
    <i>Pre-configured solution for build a Sing Page Application with ASP.NET Core and React.</i>
    <Emoji>
      <span role="img" aria-label="rocket">🚀</span>
    </Emoji>
  </Wrapper>
);

export default Home;

import React from 'react';
import styled from 'styled-components';

import Page from '../layout/Page';

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
  <Page title="Home">
    <Wrapper>
      <h1>React Core Boilerplate</h1>
      <i>Pre-configured solution for building a single-page-application with ASP.NET Core and React.</i>
      <Emoji>
        <span role="img" aria-label="rocket">🚀</span>
      </Emoji>
    </Wrapper>
  </Page>
);

export default Home;

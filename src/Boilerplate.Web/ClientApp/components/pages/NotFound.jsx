import React from 'react';
import styled from 'styled-components';

import Page from '../layout/Page';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Home = () => (
  <Page title="Page Not Found">
    <Wrapper>
      <h1>404</h1>
      <i>This page does not exist.</i>
    </Wrapper>
  </Page>
);

export default Home;

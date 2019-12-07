import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Home = () => (
  <Wrapper>
    <h1>404</h1>
    <i>This page does not exist.</i>
  </Wrapper>
);

export default Home;

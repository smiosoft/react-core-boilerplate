import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => (
  <Wrapper>
    <h1>React Core Boilerplate</h1>
    <i>Pre-configured solution for build a Sing Page Application with ASP.NET Core and React.</i>
  </Wrapper>
);

export default Home;

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => (
  <Container>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h2>Boilerplate for building React apps hosted with ASP.NET Core.</h2>
  </Container>
);

export default Home;

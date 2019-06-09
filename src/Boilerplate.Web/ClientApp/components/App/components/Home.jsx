import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import Logo from '../assets/icons/logo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Home = () => (
  <Container>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h2>Boilerplate for building React apps hosted with ASP.NET Core.</h2>
    <Logo />
  </Container>
);

export default Home;

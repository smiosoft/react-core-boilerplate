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

const Section = styled.section`

  svg {
    width: 20rem;
    height: 20rem;
  }
`;

const Home = () => (
  <Container>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>Boilerplate for building React apps hosted with ASP.NET Core</h1>
    <Section>
      <Logo />
    </Section>
  </Container>
);

export default Home;

import React from 'react';
import styled from 'styled-components';

import { Page } from '../layout';
import { Title } from '../shared';
import { ReactCoreBoilerplate } from '../shared/icons';

const Italics = styled.i`
  text-align: center;
`;

const Home = () => (
  <Page title="Home">
    <Title text="React Core Boilerplate" />
    <Italics>Boilerplate for building React apps hosted with ASP.NET Core.</Italics>
    <ReactCoreBoilerplate height="50%" />
  </Page>
);

export default Home;

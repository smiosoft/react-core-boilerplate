import React from 'react';
import styled from 'styled-components';

import { Page } from '../layout';
import { Title } from '../shared';

const Italics = styled.i`
  text-align: center;
`;

const NotFound = () => (
  <Page title="Page Not Found">
    <Title text="404" />
    <Italics>Page not found.</Italics>
  </Page>
);

export default NotFound;

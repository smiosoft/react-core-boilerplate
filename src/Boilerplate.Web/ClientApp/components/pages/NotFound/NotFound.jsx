import React from 'react';

import Page from '~components/layout/Page';
import Styles from './NotFound.styles';

function NotFound() {
  return (
    <Page title="Page Not Found">
      <Styles.Wrapper>
        <h1>404</h1>
        <i>This page does not exist.</i>
      </Styles.Wrapper>
    </Page>
  );
}

export default NotFound;

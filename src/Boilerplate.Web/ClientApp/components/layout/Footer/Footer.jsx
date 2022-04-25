import React from 'react';

import Styles from './Footer.styles';

function Footer() {
  return (
    <Styles.Wrapper>
      <Styles.Link href="https://github.com/smiosoft/react-core-boilerplate" aria-label="github" rel="noopener noreferrer">
        Github
      </Styles.Link>
    </Styles.Wrapper>
  );
}

export default Footer;

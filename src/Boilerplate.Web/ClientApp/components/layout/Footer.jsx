import React from 'react';
import styled from 'styled-components';

import { PRIMARY, SECONDARY } from '../../utils/style/colours';

const Wrapper = styled.footer`
  background: ${SECONDARY.background};
  border-top: 1px solid ${PRIMARY.highlight};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Link = styled.a`
  padding: .5rem;
  color: ${PRIMARY.colour};

  &:hover {
    color: ${PRIMARY.highlight};
  }
`;

const Footer = () => (
  <Wrapper>
    <Link href="https://github.com/smiosoft/react-core-boilerplate" aria-label="github" rel="noopener noreferrer">
      Github
    </Link>
  </Wrapper>
);

export default Footer;

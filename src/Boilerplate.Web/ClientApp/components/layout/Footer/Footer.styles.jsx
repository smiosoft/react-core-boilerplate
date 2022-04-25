import styled from 'styled-components';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colours.footer_background_colour};
  border-style: solid;
  border-color: ${({ theme }) => theme.colours.global_highlight};
  border-width: 0;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Link = styled.a`
  padding: .5rem;
  color: ${({ theme }) => theme.colours.footer_link_colour};

  &:hover {
    color: ${({ theme }) => theme.colours.global_highlight};
  }
`;

export default { Wrapper, Link };

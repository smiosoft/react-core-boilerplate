import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  padding-top: .5rem;
  background: ${({ theme }) => theme.colours.navbar_background_colour};
  border-style: solid;
  border-color: ${({ theme }) => theme.colours.global_highlight};
  border-width: 0;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

const Link = styled(NavLink)`
  padding: .5rem 2rem;
  margin-bottom: -1px;
  border-style: solid;
  border-color: transparent;
  border-width: 1px;
  border-top-width: 5px;
  border-radius: .2rem .2rem 0 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colours.navbar_link_colour};

  &:hover {
    color: ${({ theme }) => theme.colours.global_highlight};
  }

  &.active {
    background: ${({ theme }) => theme.colours.global_background_primary};
    border-color: ${({ theme }) => theme.colours.global_highlight};
    border-bottom-color: ${({ theme }) => theme.colours.global_background_primary};
  }
`;

export default { Wrapper, Link };

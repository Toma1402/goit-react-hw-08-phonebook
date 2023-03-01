import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledLink = styled(NavLink)`
  font-size: 26px;
  transition: all 0.3s ease-in-out 0s;
  color: #201c26;
  position: relative;
  &:hover,
  &:focus {
    text-shadow: #201c26 3px 3px 20px, #201c26 -2px 1px 30px;
  }
  &.active:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #201c26;
    display: block;
    border-radius: 2px;
    position: absolute;
    bottom: -7px;
    left: 0;
  }
`;
export const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

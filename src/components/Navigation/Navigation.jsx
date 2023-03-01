import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Nav, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <StyledNavLink to="/">Головна</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Контакти</StyledNavLink>}
    </Nav>
  );
};

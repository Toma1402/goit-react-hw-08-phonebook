import { Nav, StyledLink } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <Nav>
      <StyledLink to="/register">Sign up</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </Nav>
  );
};

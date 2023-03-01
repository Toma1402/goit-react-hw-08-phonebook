import { Nav, StyledLink } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <Nav>
      <StyledLink to="/register">Реєстрація</StyledLink>
      <StyledLink to="/login">Вхід</StyledLink>
    </Nav>
  );
};

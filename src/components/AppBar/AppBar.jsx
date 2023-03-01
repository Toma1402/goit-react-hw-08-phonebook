import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Header, Container } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Header>
        <Container>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </Header>
    </>
  );
};

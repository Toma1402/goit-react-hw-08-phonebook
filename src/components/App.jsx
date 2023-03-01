import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/HomePage';

import { AppBar } from './AppBar/AppBar';
import { Register } from 'pages/RegisterPage';
import { Login } from 'pages/LoginPage';
import { Contacts } from 'pages/ContactsPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RestrictedRoute } from './RestrictedRoute';

import { fetchCurrentUser } from 'redux/auth/auth-operations';

import { PrivateRoute } from './PrivateRoute';
import { NotFound } from './NotFound/NotFound';
import { Container } from './App.styled';

export const App = () => {
  /*  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);*/
  /* const isRefreshing = useSelector(selectIsRefreshing); */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={Login} redirectTo="/contacts" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};

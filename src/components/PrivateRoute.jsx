import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/auth-selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const mustRedirect = !isLoggedIn && !isRefreshing;
  return mustRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

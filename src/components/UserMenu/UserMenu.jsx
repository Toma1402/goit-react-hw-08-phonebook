import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { selectUsername } from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  const handleClick = () => {
    dispatch(logOut());
  };
  console.log(name);
  return (
    <div>
      <p>
        Welcome, <span>{name}</span>{' '}
      </p>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};

import { RemoveBtn } from 'components/ContactItem/ContactItem.styled';

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { selectUsername } from 'redux/auth/auth-selectors';
import { UserBar, UserText } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  const handleClick = () => {
    dispatch(logOut());
  };
  console.log(name);
  return (
    <UserBar>
      <UserText>
        Welcome, <span>{name}</span>{' '}
      </UserText>
      <RemoveBtn onClick={handleClick}>Log out</RemoveBtn>
    </UserBar>
  );
};

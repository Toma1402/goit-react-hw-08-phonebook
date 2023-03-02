import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContact } from 'redux/operations';

import { ContactName, ListItem, RemoveBtn } from './ContactItem.styled';
export const ContactItem = ({ name, idx, number }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(deleteContact(idx));
    toast.info('Contact was removed!');
  };
  return (
    <ListItem>
      <ContactName>
        {name}: {number}
      </ContactName>
      <RemoveBtn type="button" onClick={handleRemove}>
        Remove
      </RemoveBtn>
      <ToastContainer />
    </ListItem>
  );
};
ContactItem.propTypes = {
  idx: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

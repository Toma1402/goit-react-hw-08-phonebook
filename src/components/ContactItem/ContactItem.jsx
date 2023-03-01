import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteContact } from 'redux/operations';

import { ListItem, RemoveBtnContact } from './ContactItem.styled';
export const ContactItem = ({ name, idx, number }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(deleteContact(idx));
    toast.info('Contact was removed!');
  };
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <RemoveBtnContact type="button" onClick={handleRemove}>
        Remove
      </RemoveBtnContact>
      <ToastContainer />
    </ListItem>
  );
};
ContactItem.propTypes = {
  idx: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

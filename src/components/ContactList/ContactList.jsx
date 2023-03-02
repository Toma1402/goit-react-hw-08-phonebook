import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { ListSection, NoContacts } from './ContactList.styled';
export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log(filteredContacts);
  return filteredContacts.length !== 0 ? (
    <ListSection>
      {filteredContacts.map(({ name, id, number }, index) => (
        <ContactItem key={id} name={name} idx={id} number={number} />
      ))}
    </ListSection>
  ) : (
    <NoContacts>There is no contacts</NoContacts>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ),
};

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { AddTitle, InputSection, PageSection } from './ContactsPage.styled';
import { StyledIcon } from './HomePage.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <PageSection>
      <InputSection>
        <StyledIcon />
        <AddTitle>Add your contact</AddTitle>
        <ContactForm />
        <Filter />
      </InputSection>
      <ContactList />
    </PageSection>
  );
};

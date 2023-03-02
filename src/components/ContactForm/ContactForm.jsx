/* import { Form, AddBtnContact } from './ContactForm.styled'; */
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from 'redux/operations';
import { selectNameArr } from 'redux/selectors';
import { FormBtn, Input, StyledForm } from 'pages/Form.styled';

export const ContactForm = () => {
  const nameArr = useSelector(selectNameArr);

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;
    const inputedName = name.toLowerCase().trim();
    if (nameArr.indexOf(inputedName) >= 0) {
      toast.error(inputedName + ' is already in contacts.');
      return;
    }
    dispatch(
      addContact({
        name,
        number,
      })
    );
    toast.success(`Contact ${name} is added!`);
    e.currentTarget.reset();
  };

  return (
    <div>
      <StyledForm
        style={{
          width: '280px',
          backgroundColor: 'rgba(0,0,0,0',
          marginBottom: '0',
        }}
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label htmlFor="addName">Name</label>
        <Input
          id="addName"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="addNumber">Phone</label>
        <Input
          id="addNumber"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <FormBtn style={{ width: '120px' }} type="submit">
          Add contact
        </FormBtn>
        <ToastContainer />
      </StyledForm>
    </div>
  );
};

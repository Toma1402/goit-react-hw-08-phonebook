import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import {  FormBtn, Input, StyledForm } from './Form.styled';


export const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const name = form.name.value;
    const email = form.login.value;
    const password = form.password.value;
    console.log(name, email, password);
    dispatch(register({ name, email, password }));
    e.currentTarget.reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="rName">Enter your name</label>
      <Input
        id="rName"
        autoComplete="true"
        type="text"
        name="name"
        placeholder="Name..."
      />
      <label htmlFor="rLogin">Enter your email</label>
      <Input
        id="rLogin"
        autoComplete="true"
        type="text"
        name="login"
        placeholder="Email..."
      />
      <label htmlFor="rPassword">Enter your password</label>
      <Input
        id="rPassword"
        autoComplete="true"
        type="password"
        name="password"
        placeholder="Password..."
      />
      <FormBtn type="submit">Sign up</FormBtn>
    </StyledForm>
  );
};

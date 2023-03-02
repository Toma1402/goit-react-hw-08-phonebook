import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import { FormBtn, Input, StyledForm } from './Form.styled';
import { useFormik } from 'formik';

export const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    dispatch(logIn({ email, password }));
    e.currentTarget.reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="lLogin">Enter your email</label>
      <Input
        id="lLogin"
        autoComplete="true"
        type="text"
        name="email"
        placeholder="Email..."
      />
      <label htmlFor="lPassword">Enter your password</label>
      <Input
        id="lPassword"
        autoComplete="true"
        type="password"
        name="password"
        placeholder="Password..."
      />
      <FormBtn>Log in</FormBtn>
    </StyledForm>
  );
};

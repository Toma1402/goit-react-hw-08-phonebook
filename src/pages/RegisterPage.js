import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

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
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name
        <input
          autoComplete="true"
          type="text"
          name="name"
          placeholder="name..."
        />
      </label>
      <label>
        Enter your login or email
        <input
          autoComplete="true"
          type="text"
          name="login"
          placeholder="login or email..."
        />
      </label>
      <label>
        Enter your password
        <input
          autoComplete="true"
          type="password"
          name="password"
          placeholder="password..."
        />
      </label>
      <button>Register</button>
    </form>
  );
};

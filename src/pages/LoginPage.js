import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

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
    <form onSubmit={handleSubmit}>
      <label>
        Enter your login or email
        <input
          autoComplete="true"
          type="text"
          name="email"
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
      <button>Enter</button>
    </form>
  );
};

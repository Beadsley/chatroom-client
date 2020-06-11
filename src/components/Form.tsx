import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormProps } from '../types';
import { updateUser, newUser, connectUser } from '../store/actions/actions.user';
import { User } from '../store/actions/actions.user.types';

const LoginForm: React.FC<FormProps> = (props) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user: User = {
      name,
      loggedIn: true,
      error: null,
    };
    dispatch(connectUser());
    dispatch(newUser(name));
    // dispatch(updateUser(user));
    setName('');
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <form>
        <input type='text' required placeholder='name' autoComplete='off' value={name} onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;

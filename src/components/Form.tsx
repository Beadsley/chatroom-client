import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormProps } from '../types';
import { updateUser } from '../store/actions/actions.user';
import { addNewUser } from '../store/actions/actions.emit';
import { socket } from '../config';

const LoginForm: React.FC<FormProps> = (props) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user = {
      name,
      loggedIn: true,
    };
    dispatch(addNewUser(name));
    dispatch(updateUser(user));
    // const d = socket.emit('new-user', name); //services ??
    // console.log(d);
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

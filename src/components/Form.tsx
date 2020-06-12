import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProps } from '../types';
import { RootState } from "../store/store";
import { updateUser, newUser, connectUser } from '../store/actions/actions.user';
import { User } from '../store/actions/actions.user.types';

const LoginForm: React.FC<FormProps> = (props) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state: RootState): User => state.user.data);  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    !user.connected && dispatch(connectUser());
    dispatch(newUser(name));
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

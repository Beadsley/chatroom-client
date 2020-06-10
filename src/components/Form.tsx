import React, { useState } from 'react';
import { FormProps } from '../types';

const LoginForm: React.FC<FormProps> = (props) => {
  const [name, setName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(name);
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

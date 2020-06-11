import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../store/actions/actions.user';
import { RootState } from '../store/store';
import { socket } from '../config';
import { appendMessage } from '../store/actions/actions.messages';
import { Message } from '../store/actions/actions.messages.types';

const ChatRoom: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.data);
  const messages = useSelector((state: RootState) => state.messages.data);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const message: Message = {
      message: userInput,
      name: user.name,
    };

    socket.emit('send-chat-message', message);
    setUserInput('');
    dispatch(appendMessage(message))
  };

  return (
    <div>
      <h1>ChatRoom </h1>
      <h2>{`Hey ${user.name}`} </h2>
      <button onClick={handleLogOut}>LogOut</button>
      <form>
        <input
          type='text'
          required
          placeholder='message'
          autoComplete='off'
          value={userInput}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {messages.map((message) => (
        <p>{`user:${message.name}: ${message.message}`}</p>
      ))}
    </div>
  );
};

export default ChatRoom;

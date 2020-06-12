import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../store/actions/actions.user';
import { RootState } from '../store/store';
import { appendMessage, sendMessage } from '../store/actions/actions.messages';
import { Message } from '../store/actions/actions.messages.types';
import { User } from '../store/actions/actions.user.types';

const ChatRoomBasic: React.FC = () => {
  const user = useSelector((state: RootState): User => state.user.data);
  const messages = useSelector((state: RootState): Message[] => state.messages.data);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState<string>('');

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

    // socket.emit('send-chat-message', message);
    dispatch(sendMessage(message));
    dispatch(appendMessage(message));
    setUserInput('');
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

export default ChatRoomBasic;

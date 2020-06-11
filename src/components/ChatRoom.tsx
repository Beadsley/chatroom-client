import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../store/actions/actions.user';
import { RootState } from '../store/store';
import { socket } from '../config';

interface Message {
  message: string;
  name: string | undefined;
}
const ChatRoom: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.data);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on('chat-message', (data: Message) => {
      setMessages((prevState) => [...prevState, { name: data.name, message: data.message }]);
    });
  }, []);

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
    setMessages((prevState) => [...prevState, message]);
    socket.emit('send-chat-message', message);
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

import { socket } from '../../config';

export const addNewUser = (name: string) => {
  return () => {
    try {
      socket.emit('new-user', name);
    } catch {
      //   dispatch(hasErrored(true));
    }
  };
};

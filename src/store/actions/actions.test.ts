import { newUser, logOutUser, connectUser, updateUser } from './actions.user';
import {
  usernameTakenAlert,
  connectionErrorAlert,
  userInactiveAlert,
  closeAlert,
} from './actions.alert';
import { appendChatuser, disconnectChatuser, inactiveChatuser } from './actions.chatusers';
import { appendMessage, sendMessage } from './actions.messages';

describe('User actions', () => {
  test('should return CONNECT_USER Action', () => {
    const expected = {
      type: 'CONNECT_USER',
    };
    expect(connectUser()).toStrictEqual(expected);
  });
  test('should return NEW_USER Action', () => {
    const expected = {
      type: 'NEW_USER',
      payload: { name: 'DAN' },
    };
    expect(newUser('DAN')).toStrictEqual(expected);
  });
  test('should return UPDATE_USER Action', () => {
    const expected = {
      type: 'UPDATE_USER',
      payload: { name: 'DAN', loggedIn: false, connected: false, awaitingResponse: false },
    };
    expect(
      updateUser({ name: 'DAN', loggedIn: false, connected: false, awaitingResponse: false })
    ).toStrictEqual(expected);
  });
  test('should return LOG_OUT Action', () => {
    const expected = {
      type: 'LOG_OUT',
    };
    expect(logOutUser()).toStrictEqual(expected);
  });
});

describe('Alert actions', () => {
  test('should return USERNAME_TAKEN Action', () => {
    const expected = {
      type: 'USERNAME_TAKEN',
      payload: { type: 'USERNAME_TAKEN', activated: true, message: 'username taken' },
    };
    expect(
      usernameTakenAlert({ type: 'USERNAME_TAKEN', activated: true, message: 'username taken' })
    ).toStrictEqual(expected);
  });
  test('should return CONNECTION_ERROR Action', () => {
    const expected = {
      type: 'CONNECTION_ERROR',
      payload: { type: 'CONNECTION_ERROR', activated: true, message: 'connection error' },
    };
    expect(
      connectionErrorAlert({
        type: 'CONNECTION_ERROR',
        activated: true,
        message: 'connection error',
      })
    ).toStrictEqual(expected);
  });
  test('should return USER_INACTIVE Action', () => {
    const expected = {
      type: 'USER_INACTIVE',
      payload: { type: 'USER_INACTIVE', activated: true, message: 'user inactive' },
    };
    expect(
      userInactiveAlert({ type: 'USER_INACTIVE', activated: true, message: 'user inactive' })
    ).toStrictEqual(expected);
  });
  test('should return CLOSE_ALERT Action', () => {
    const expected = {
      type: 'CLOSE_ALERT',
    };
    expect(closeAlert()).toStrictEqual(expected);
  });
});

describe('Chatusers actions', () => {
  const date: Date = new Date();
  test('should return CHATUSER_CONNECTED Action', () => {
    const expected = {
      type: 'CHATUSER_CONNECTED',
      payload: { name: 'DAN', joined: date },
    };
    expect(appendChatuser({ name: 'DAN', joined: date })).toStrictEqual(expected);
  });
  test('should return CHATUSER_DISCONNECTED Action', () => {
    const expected = {
      type: 'CHATUSER_DISCONNECTED',
      payload: { name: 'DAN' },
    };
    expect(disconnectChatuser('DAN')).toStrictEqual(expected);
  });
  test('should return CHATUSER_INACTIVE Action', () => {
    const expected = {
      type: 'CHATUSER_INACTIVE',
      payload: { name: 'DAN' },
    };
    expect(inactiveChatuser('DAN')).toStrictEqual(expected);
  });
});

describe('Chatusers actions', () => {
  const date: Date = new Date();
  test('should return MESSAGE_RECEIVED Action', () => {
    const expected = {
      type: 'MESSAGE_RECEIVED',
      payload: { text: 'DAN', sender: 'DAN', timestamp: date },
    };
    expect(appendMessage({ text: 'DAN', sender: 'DAN', timestamp: date })).toStrictEqual(expected);
  });
  test('should return SEND_MESSAGE Action', () => {
    const expected = {
      type: 'SEND_MESSAGE',
      payload: { text: 'DAN', sender: 'DAN', timestamp: date },
    };
    expect(sendMessage({ text: 'DAN', sender: 'DAN', timestamp: date })).toStrictEqual(expected);
  });
});

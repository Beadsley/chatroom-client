import reducers from './reducer.root';

describe('Reducers', () => {
  test('INIT', () => {
    let state;
    state = reducers(undefined, {});
    expect(state).toEqual({
      user: { data: { loggedIn: false, connected: false, awaitingResponse: false } },
      messages: { data: [] },
      chatusers: { data: [] },
      alert: { data: { activated: false } },
    });
  });

  test('CONNECT_USER', () => {
    let state;
    state = reducers(
      {
        user: { data: { loggedIn: false, connected: false, awaitingResponse: false } },
        messages: { data: [] },
        chatusers: { data: [] },
        alert: { data: { activated: false } },
      },
      { type: 'CONNECT_USER' }
    );
    expect(state).toEqual({
      user: { data: { loggedIn: false, connected: false, awaitingResponse: false } },
      messages: { data: [] },
      chatusers: { data: [] },
      alert: { data: { activated: false } },
    });
  });
  test('NEW_USER', () => {
    let state;
    state = reducers(
      {
        user: { data: { loggedIn: false, connected: false, awaitingResponse: false } },
        messages: { data: [] },
        chatusers: { data: [] },
        alert: { data: { activated: false } },
      },
      { type: 'NEW_USER', payload: { name: 'dan' } }
    );
    expect(state).toEqual({
      user: { data: { name: 'dan', loggedIn: false, connected: false, awaitingResponse: true } },
      messages: { data: [] },
      chatusers: { data: [] },
      alert: { data: { activated: false } },
    });
  });

  test('UPDATE_USER', () => {
    let state;
    state = reducers(
      {
        user: { data: { name: 'dan', loggedIn: false, connected: false, awaitingResponse: true } },
        messages: { data: [] },
        chatusers: { data: [] },
        alert: { data: { activated: false } },
      },
      {
        type: 'UPDATE_USER',
        payload: { name: 'dan', loggedIn: true, connected: true, awaitingResponse: false },
      }
    );
    expect(state).toEqual({
      user: { data: { name: 'dan', loggedIn: true, connected: true, awaitingResponse: false } },
      messages: { data: [] },
      chatusers: { data: [] },
      alert: { data: { activated: false } },
    });
  });
  test('CHATUSER_CONNECTED', () => {
    let state;
    state = reducers(
      {
        user: { data: { name: 'dan', loggedIn: true, connected: true, awaitingResponse: false } },
        messages: { data: [] },
        chatusers: { data: [] },
        alert: { data: { activated: false } },
      },
      { type: 'CHATUSER_CONNECTED', payload: { name: 'dan', joined: '2020-06-14T05:28:57.890Z' } }
    );
    expect(state).toEqual({
      user: { data: { name: 'dan', loggedIn: true, connected: true, awaitingResponse: false } },
      messages: { data: [] },
      chatusers: {
        data: [
          {
            name: 'dan',
            joined: '2020-06-14T05:28:57.890Z',
            connected: true,
            disconnected: false,
            inactive: false,
          },
        ],
      },
      alert: { data: { activated: false } },
    });
  });
  test('SEND_MESSAGE', () => {
    let state;
    state = reducers(
      {
        user: { data: { name: 'dan', loggedIn: true, connected: true, awaitingResponse: false } },
        messages: { data: [] },
        chatusers: {
          data: [
            {
              name: 'dan',
              joined: '2020-06-14T05:28:57.890Z',
              connected: true,
              disconnected: false,
              inactive: false,
            },
          ],
        },
        alert: { data: { activated: false } },
      },
      {
        type: 'SEND_MESSAGE',
        payload: { text: 'dan', sender: 'dan', timestamp: '2020-06-14T05:30:10.050Z' },
      }
    );
    expect(state).toEqual({
      user: { data: { name: 'dan', loggedIn: true, connected: true, awaitingResponse: false } },
      messages: { data: [] },
      chatusers: {
        data: [
          {
            name: 'dan',
            joined: '2020-06-14T05:28:57.890Z',
            connected: true,
            disconnected: false,
            inactive: false,
          },
        ],
      },
      alert: { data: { activated: false } },
    });
  });
  test('LOG_OUT', () => {
    let state;
    state = reducers(
      {
        user: { data: { name: 'dan', loggedIn: true, connected: true, awaitingResponse: false } },
        messages: { data: [{ text: 'dan', sender: 'dan', timestamp: '2020-06-14T05:30:10.050Z' }] },
        chatusers: {
          data: [
            {
              name: 'dan',
              joined: '2020-06-14T05:28:57.890Z',
              connected: true,
              disconnected: false,
              inactive: false,
            },
          ],
        },
        alert: { data: { activated: false } },
      },
      { type: 'LOG_OUT' }
    );
    expect(state).toEqual({
      user: { data: { loggedIn: false, connected: false, awaitingResponse: false } },
      messages: { data: [] },
      chatusers: { data: [] },
      alert: { data: { activated: false } },
    });
  });
});

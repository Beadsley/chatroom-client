interface MockMessage {
  message: string;
  name: string;
}
export const mockMessages: MockMessage[] = [
  { message: 'hey', name: 'JJ' },
  { message: 'hey there', name: 'dan' },
  { message: 'how are you', name: 'JJ' },
  { message: 'pretty good ', name: 'dan' },
  { message: 'how are you', name: 'JJ' },
  { message: 'decent', name: 'dan' },
  { message: 'enjoy the bbq', name: 'dan' },
  { message: 'really did', name: 'JJ' },
  { message: 'top notch sausages, where', name: 'JJ' },
];

interface MockChatUsers {
  name: string;
  connected: boolean;
  disconnected: boolean;
  inactive: boolean;
}

export const mockChatusers: MockChatUsers[] = [
  {
    name: 'dan',
    connected: true,
    disconnected: false,
    inactive: false,
  },
  {
    name: 'Simon',
    connected: true,
    disconnected: false,
    inactive: false,
  },
  {
    name: 'Jack',
    connected: true,
    disconnected: false,
    inactive: false,
  },
];

interface MockUser {
  name: string | undefined;
  loggedIn: boolean;
  error: { type: string; message: string } | null;
}

export const mockUser: MockUser = {
  name: 'dan',
  loggedIn: true,
  error: null,
};

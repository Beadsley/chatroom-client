interface MockMessage {
  message: string;
  name: string | undefined;
}
export const mockMessages: MockMessage[] = [
  { message: 'hey there', name: 'Simon' },
  { message: 'Dan has joined the chat', name: undefined },
  { message: 'hey', name: 'dan' },
  { message: 'how are you', name: 'dan' },
  { message: 'pretty good ', name: 'Simon' },
  { message: 'how are you', name: 'dan' },
  { message: 'how are you', name: 'dan' },
  { message: 'decent', name: 'Simon' },
  { message: 'enjoy the bbq', name: 'Simon' },
  { message: 'really did', name: 'dan' },
  { message: 'really did', name: 'dan' },
  { message: 'really did', name: 'dan' },
  { message: 'top notch sausages, where', name: 'Simon' },
  { message: 'really did', name: 'dan' },
  { message: 'Jack has joined the chat', name: undefined },
  { message: 'decent', name: 'Jack' },
  { message: 'enjoy the bbq', name: 'Jack' },
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

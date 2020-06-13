const prod: { ROOT_URL: string } = {
  ROOT_URL: 'https://lets-get-chatty.herokuapp.com/',
};
const dev: { ROOT_URL: string } = {
  ROOT_URL: 'http://localhost:5000',
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;

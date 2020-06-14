import { createMuiTheme } from '@material-ui/core';

const prod: { ROOT_URL: string } = {
  ROOT_URL: 'https://lets-get-chatty.herokuapp.com/',
};
const dev: { ROOT_URL: string } = {
  ROOT_URL: 'http://localhost:5000',
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: 'rgb(23, 105, 170)',
      dark: '#000',
    },
    secondary: {
      main: '#58a5f0',
    },
  },
});

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
      main: '#b39ddb',
      light: '#e6ceff',
      dark: '#836fa9',
    },
    secondary: {
      main: '#ffe0b2',
      light: '#ffffe4',
      dark: '#cbae82',
    },
  },
});

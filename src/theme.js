import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 50,
  },
  palette: {
    type: 'light',
    primary: {
      main: '#2C2E31',
      light: '#fff',
      dark: '#505459',
    },
    secondary: {
      main: red.A400,
      light: '#fff',
      dark: red.A400,
    },
    error: {
      main: red.A400,
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
});
export default theme;

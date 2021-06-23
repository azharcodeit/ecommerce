import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Proxima Nova",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontWeight: 50,
  },
  palette: {
    type: "light",
    primary: {
      main: "#2C2E31",
      light: "#fff",
      dark: "#505459",
    },
    secondary: {
      main: "#2C2E31",
      light: "#fff",
      dark: "#505459",
    },
    error: {
      main: red.A400,
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#fff", // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: "5px",
      },
    },
  },
});
export default theme;

import { createTheme, ThemeProvider } from '@mui/material/styles';
export const Theme = createTheme({
  typography: {
    fontFamily: 'monospace',
    h1: {
      fontFamily: 'serif',
      color: 'red',
    },
    h6: {
      fontFamily: 'serif',
      color: 'red',
    },
    button: {
      textTransform: 'none',
    },
  },
});

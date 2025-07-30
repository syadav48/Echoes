// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6b46c1',
      light: '#9a75e8',
      dark: '#4a1d96',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3182ce',
      light: '#63a4e8',
      dark: '#1c5a8a',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f9fafb',
      paper: '#ffffff',
    },
    text: {
      primary: '#1a202c',
      secondary: '#4a5568',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 16px',
          borderRadius: '6px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
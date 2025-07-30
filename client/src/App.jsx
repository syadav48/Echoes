// App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;

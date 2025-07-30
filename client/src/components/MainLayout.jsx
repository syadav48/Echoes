// components/MainLayout.js
import React from 'react';
import { Container } from '@mui/material';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default MainLayout;

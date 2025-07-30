// components/Footer.js
import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 8 }}>
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: 3,
        }}
      >
        <Divider sx={{ borderColor: 'grey.800', mt: 4, mb: 4 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography color="grey.400" sx={{ mb: { xs: 2, md: 0 } }}>
            © 2023 Blogify. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Link href="#" color="grey.400" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="grey.400" underline="hover">
              Terms of Service
            </Link>
            <Link href="#" color="grey.400" underline="hover">
              Cookies Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
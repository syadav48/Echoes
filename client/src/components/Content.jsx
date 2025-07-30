// components/HeroSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Content = () => {

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #6b46c1 0%, #3182ce 100%)',
        color: 'white',
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          maxWidth: '800px',
          mx: 'auto',
          px: 3,
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{ mb: 4, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
        >
          Share Your Thoughts With The World
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 5,
            fontSize: '1.25rem',
            opacity: 0.9,
          }}
        >
          Blogify offers the perfect platform for writers, thinkers, and creators to express
          themselves and build an audience.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              px: 4,
              py: 1.5,
              fontWeight: 700,
              '&:hover': {
                bgcolor: 'white',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            Start Writing Now
          </Button>
          <Button
            variant="outlined"
            sx={{
              border: '2px solid white',
              color: 'white',
              px: 4,
              py: 1.5,
              fontWeight: 700,
              '&:hover': {
                border: '2px solid white',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease',
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
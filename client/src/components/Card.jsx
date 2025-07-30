// components/MemoryCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';

const MemoryCard = ({ title, description, imageUrl }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 1,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 2,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6" component="div" color="text.primary">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {description}
        </Typography>
        <Link to="#" style={{ textDecoration: 'none', color: '#1976d2' }}>
          Read More
        </Link>
      </CardContent>
    </Card>
  );
};

export default MemoryCard;

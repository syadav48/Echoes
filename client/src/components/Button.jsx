import React from 'react';
import { Button } from '@mui/material';
const CustomButton = ({ children, ...props }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: 2,
        boxShadow: 1,
        '&:hover': {
          boxShadow: 2,
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
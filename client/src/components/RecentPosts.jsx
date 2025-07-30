// components/FeaturesSection.js
import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  Edit as EditIcon,
  Bolt as BoltIcon,
  Security as SecurityIcon,
} from '@mui/icons-material';

const features = [
  {
    icon: <EditIcon fontSize="large" />,
    title: 'Beautiful Themes',
    description:
      'Choose from dozens of professionally designed templates that make your content shine.',
    color: 'purple',
  },
  {
    icon: <BoltIcon fontSize="large" />,
    title: 'Lightning Fast',
    description:
      'Our platform is optimized for speed, ensuring your readers have the best experience.',
    color: 'blue',
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: 'Secure & Reliable',
    description:
      'Your content is protected with enterprise-grade security and 99.9% uptime guarantee.',
    color: 'green',
  },
];

const FeaturesSection = () => {

  return (
    <Box sx={{ py: 10, bgcolor: 'grey.50' }}>
      <Box sx={{ textAlign: 'center', mb: 10, px: 3 }}>
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          Why Choose Blogify?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
        >
          Everything you need to create, publish, and grow your blog
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ px: 3, maxWidth: '1200px', mx: 'auto' }}>
        {features.map((feature) => (
          <Grid item xs={12} md={4} key={feature.title}>
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 4,
                borderRadius: 2,
                boxShadow: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3,
                },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    bgcolor: `${feature.color}.100`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  {React.cloneElement(feature.icon, {
                    sx: { color: `${feature.color}.600` },
                  })}
                </Box>
                <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
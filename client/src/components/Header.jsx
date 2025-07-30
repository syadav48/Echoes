// components/Header.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component="a" href={item.href}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src="https://placehold.co/40x40"
            alt="Blogify logo"
            sx={{ mr: 2 }}
          />
          <Typography
            variant="h6"
            component="a"
            href="#"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #6b46c1 0%, #3182ce 100%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              textDecoration: 'none',
            }}
          >
            Blogify
          </Typography>
        </Box>

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 4 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{ color: 'text.primary', fontWeight: 500 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button href="#" sx={{ color: 'text.primary', fontWeight: 500 }}>
            Login
          </Button>
          <Button
            href="#"
            variant="contained"
            color="primary"
            sx={{ fontWeight: 500 }}
          >
            Sign Up Free
          </Button>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
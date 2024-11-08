import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function AppBarComponent() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1A237E' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, fontWeight: 'bold', color: 'inherit', textDecoration: 'none' }}
        >
          FDS
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/contact" color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComponent;

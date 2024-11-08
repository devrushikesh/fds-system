import React from 'react';
import AppBarComponent from './AppBarComponent';
import { Box, Container } from '@mui/material';
import Footer from './Footer'

function WebSite({ children }) {
  return (
    <Box>
      <AppBarComponent />
      <Container sx={{ mt: 4 }}>{children}</Container>
      <Footer />
    </Box>
  );
}

export default WebSite;

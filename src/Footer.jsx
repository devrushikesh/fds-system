// Footer.js

import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#212121', color: '#ddd', py: 3, mt: 4 }}>
      <Container>
        <Typography variant="body1" align="center">
          © 2023 Fraud Awareness. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          Contact us at info@fraudawareness.com for more information.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

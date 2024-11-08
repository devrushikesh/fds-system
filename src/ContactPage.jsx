import React, { useState } from 'react';
import { Container, TextField, Typography, Button, Box, Grid } from '@mui/material';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" sx={{ color: '#1A237E', fontWeight: 'bold' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We'd love to hear from you! Please fill out the form below to get in touch.
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              variant="outlined"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: '#1A237E' }}>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ContactPage;

import React, { useEffect } from 'react';
import { Box, Typography, Paper, Grid, Avatar, Divider } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ padding: 4, maxWidth: '1200px', margin: '0 auto' }}>
      
      {/* Project Introduction */}
      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1A237E', textAlign: 'center', marginBottom: 4 }}>
        About Our Fraud Detection Project
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Our team is dedicated to building innovative fraud detection models that safeguard individuals and organizations from various types of financial and online frauds. Our project leverages machine learning algorithms and advanced analytics to detect patterns of fraudulent activities and stop potential fraud attempts before they escalate. This project aims to address the ever-evolving techniques of cybercriminals with robust, real-time fraud detection methods that can be integrated seamlessly into different applications and services.
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        With the growing reliance on digital transactions and online interactions, the risk of fraudulent activities has increased significantly. Our models are designed to mitigate this risk by analyzing transaction data, user behavior, and other factors, providing a layered approach to security. Through this project, we aim to contribute to a safer digital environment, empowering businesses and users to engage online without compromising their security.
      </Typography>

      {/* Project Highlights */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 3 }}>
        Project Highlights
      </Typography>

      <Box sx={{ marginBottom: 4 }}>
        <ul>
          <li><Typography variant="body1">Real-time fraud detection with high accuracy using machine learning.</Typography></li>
          <li><Typography variant="body1">Scalable and flexible models suitable for various industries, from finance to e-commerce.</Typography></li>
          <li><Typography variant="body1">Sophisticated analysis of transaction patterns and user behavior to identify potential fraud.</Typography></li>
          <li><Typography variant="body1">User-friendly design that can be integrated easily into existing systems.</Typography></li>
          <li><Typography variant="body1">Comprehensive documentation and support for seamless implementation.</Typography></li>
        </ul>
      </Box>

      {/* Team Section */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 3 }}>
        Meet the Team
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        Our project is driven by a team of passionate developers, each bringing unique skills and perspectives to create a powerful fraud detection solution. Meet the talented individuals behind this project:
      </Typography>

      <Grid container spacing={3}>
        {[
          { name: "Sahil Jamadar", role: "Lead Developer", desc: "Specializing in model training and data analysis." },
          { name: "Rushikesh Choudhari", role: "Backend Developer", desc: "Focused on data processing and API integrations." },
          { name: "Piyush Mahamuni", role: "Machine Learning Engineer", desc: "Works on the algorithm design and model evaluation." },
          { name: "Rohit Pawar", role: "Frontend Developer", desc: "Responsible for user interface and UX design." },
          { name: "Shivam Chintaman", role: "Security Specialist", desc: "Ensures data security and robust encryption practices." },
        ].map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 3, textAlign: 'center', borderRadius: '8px' }}>
              <Avatar sx={{ bgcolor: '#1A237E', width: 80, height: 80, margin: '0 auto' }}>
                <AccountCircle fontSize="large" />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
                {member.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {member.role}
              </Typography>
              <Divider sx={{ marginY: 2 }} />
              <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                {member.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Project Vision */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginTop: 5, marginBottom: 3 }}>
        Our Vision
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        We envision a world where individuals and organizations can transact and interact digitally without the constant fear of fraud. Our project seeks to build a foundation for secure, fraud-resistant systems that are both intelligent and adaptable. Through continuous improvement and adaptation to new fraud techniques, our team is committed to staying at the forefront of fraud prevention technology. Our goal is to make a tangible impact on the world of digital security, helping protect people and businesses around the globe.
      </Typography>
    </Box>
  );
};

export default AboutPage;

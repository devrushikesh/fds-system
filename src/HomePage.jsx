import React from 'react';
import { Container, Typography, Box, Card, CardContent, Button, Grid, AppBar, Toolbar } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import PhishingIcon from '@mui/icons-material/Phishing';
import SecurityIcon from '@mui/icons-material/Security';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person'
import StorefrontIcon from '@mui/icons-material/Storefront'
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {

  const navigate = useNavigate();

  const fraudTypes = [
    {
      title: "Financial Scams",
      description: "Scams involving financial transactions, fake investments, and loan fraud.",
      icon: <ReportProblemIcon fontSize="large" sx={{ color: '#FF6F61' }} />, // Soft coral
      image: "/images/financial-scam1.jpeg",
      tips: "Be cautious of offers that seem too good to be true. Always verify investment opportunities.",
      urlEndPoint: 'financial-scam'
    },
    {
      title: "Identity Theft",
      description: "Stealing personal information to commit fraud under another identity.",
      icon: <SecurityIcon fontSize="large" sx={{ color: '#4CAF50' }} />, // Green
      image: "/images/identity-theft.jpeg",
      tips: "Secure your data, monitor your accounts, and use two-factor authentication.",
      urlEndPoint: 'identity-theft'
    },
    {
      title: "Phishing Attacks",
      description: "Fake emails or messages attempting to steal login information.",
      icon: <PhishingIcon fontSize="large" sx={{ color: '#FF9800' }} />, // Amber
      image: "/images/phishing.jpeg",
      tips: "Avoid clicking on unknown links and verify email senders.",
      urlEndPoint: 'phishing-attacts'
    },
    {
      title: "Corporate Fraud",
      description: "Misrepresentation of a company’s financial health to deceive stakeholders.",
      icon: <BusinessIcon fontSize="large" sx={{ color: '#607D8B' }} />, // Blue-grey
      image: "/images/corporate-fraud.jpeg",
      tips: "Conduct regular audits and enforce transparency in financial reporting.",
      urlEndPoint: 'corporate-fraud'
    },
    {
      title: "E-commerce Fraud",
      description: "Fake online stores and scams in digital marketplaces.",
      icon: <StorefrontIcon fontSize="large" sx={{ color: '#009688' }} />, // Teal
      image: "/images/ecommerce-fraud.jpeg",
      tips: "Only shop on trusted sites and verify the store's credibility.",
      urlEndPoint: 'ecommerce-fraud'
    },
    {
      title: "Social Engineering",
      description: "Manipulating individuals to reveal confidential information.",
      icon: <PersonIcon fontSize="large" sx={{ color: '#3F51B5' }} />, // Indigo
      image: "/images/social-engineering.jpeg",
      tips: "Be wary of unsolicited requests for information and verify identities.",
      urlEndPoint: 'social-engineering'
    },
  ];

  const historicalFrauds = [
    {
      title: "The Ponzi Scheme (1920s)",
      description: "Charles Ponzi defrauded investors by promising high returns on international postal reply coupons.",
      image: "/images/ponzi-scheme.jpeg",
    },
    {
      title: "Enron Scandal (2001)",
      description: "One of the largest accounting frauds in history where Enron executives inflated earnings to deceive investors.",
      image: "/images/enron.jpeg",
    },
    {
      title: "Bernie Madoff's Ponzi Scheme (2008)",
      description: "A $65 billion scheme that defrauded thousands of investors over several decades.",
      image: "/images/madoff.jpeg",
    },
  ];

  const protectionTips = [
    "Verify links and sender information before clicking on any message or email.",
    "Use strong passwords and enable two-factor authentication on important accounts.",
    "Avoid sharing personal details on untrusted websites.",
    "Monitor bank statements and credit reports for suspicious activity.",
    "Be wary of unsolicited requests for donations, especially during crises.",
  ];

  const resources = [
    { title: "Federal Trade Commission", link: "https://www.ftc.gov" },
    { title: "Consumer Financial Protection Bureau", link: "https://www.consumerfinance.gov" },
    { title: "FBI's Internet Crime Complaint Center", link: "https://www.ic3.gov" },
  ];


  const handleFraudClick = (index) => {
    console.log(index);

    if (index >= 0) {
      navigate(`/fraud-details/${fraudTypes[index].urlEndPoint}`);
    }
  }


  return (
    <div className="App">


      <Container sx={{ mt: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 15 }}>
          <Typography variant="h2" gutterBottom sx={{ color: '#1A237E', fontWeight: 'bold' }}>
            Protect Yourself from Fraud
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Learn about different types of fraud and ways to protect yourself.
          </Typography>
          <Button variant="contained" color="primary"  href="/fraud-prevention" sx={{ backgroundColor: '#1A237E', mt: 2 }}>
            Learn About Fraud Prevention
          </Button>
        </Box>


        {/* Types of Fraud */}
        <Typography variant="h4" sx={{ color: '#1A237E', mb: 5, textAlign: 'center', fontSize: '1.525rem' }}>Various Types of Fraud</Typography>
        <Grid container spacing={4}>
          {fraudTypes.map((fraud, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  minHeight: 500,
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  boxShadow: 0,
                  border: '1px solid lightgrey',
                  position: 'relative',
                  '&:hover': {
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.02)',
                    transition: '0.3s ease-in-out',
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', paddingBottom: '56px' }}  >
                <img
  src={fraud.image}
  alt={fraud.title}
  style={{
    width: '100%',
    height: 'auto', // Automatically adjusts the height to fit horizontally
    objectFit: 'cover', // Ensures the image fills the container while maintaining aspect ratio
    borderRadius: '8px'
  }}
/>

                  <Box sx={{ mt: 2 }}>
                    {fraud.icon}
                    <Typography variant="h5" gutterBottom sx={{ color: '#1A237E' }}>{fraud.title}</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>{fraud.description}</Typography>
                    <Typography variant="body2" sx={{ color: '#757575' }}><strong>Prevention Tips:</strong> {fraud.tips}</Typography>
                  </Box>
                </CardContent>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80%',
                    textAlign: 'center',
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      width: '100%',
                      backgroundColor: '#1A237E',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: '#3949AB',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                    onClick={() => handleFraudClick(index)}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>


        {/* Historical Frauds */}
        <Typography variant="h4" sx={{ color: '#1A237E', mt: 10, mb: 5, textAlign: 'center', fontSize: '1.525rem' }}>Historical Frauds</Typography>
        <Grid container spacing={4}>
          {historicalFrauds.map((fraud, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: '#fff', minHeight: 400, borderRadius: 2, boxShadow: 0, border: '1px solid lightgrey' }}>
                <CardContent>
                  <img src={fraud.image} alt={fraud.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="h6" sx={{ color: '#1A237E' }}>{fraud.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{fraud.description}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </div>
  );
}

export default HomePage;

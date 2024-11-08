import React, { useEffect } from 'react';
import { Grid, Typography, Box, Paper, Link } from '@mui/material';

const IdentityTheftArticle = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ padding: 2, maxWidth: '1200px', margin: '0 auto' }}>

      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1A237E', textAlign: 'center', marginBottom: 4 }}>
        Understanding Identity Theft: A Growing Concern
      </Typography>
      
      {/* Image at the top of the article */}
      <Box sx={{ marginBottom: 4 }}>
        <img
          src="/images/identity-theft.jpg"  // Your image path here
          alt="Identity Theft"
          style={{ width: '100%', height: '500px', borderRadius: '8px' }}
        />
      </Box>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Identity theft is one of the most pervasive crimes in the modern digital world. It happens when someone gains unauthorized access to your personal information—such as your Social Security number, bank account details, or credit card information—and uses it for fraudulent purposes. This breach can lead to devastating consequences, including financial loss, damaged credit, and emotional distress. As technology advances, so do the methods of identity thieves. In this article, we’ll explore why identity theft occurs, the history of these crimes, and provide prevention tips to safeguard your personal information. For more details, visit <Link href="https://www.identitytheft.gov" target="_blank">IdentityTheft.gov</Link>.
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 2 }}>
        Why Does Identity Theft Happen?
      </Typography>
      
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Identity theft occurs when a criminal gains access to your personal data and exploits it for fraudulent activities. Here are some reasons why identity theft is so prevalent today:
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight:150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Increased Online Transactions</Typography>
            <Typography variant="body1">
              As more people conduct business online, there is an increased risk of personal information being exposed. Data breaches, weak passwords, and unsecured Wi-Fi networks create opportunities for hackers to steal sensitive information. Learn more at <Link href="https://www.cybersecurity.gov" target="_blank">Cybersecurity.gov</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight:150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Data Breaches</Typography>
            <Typography variant="body1">
              Many large companies store a vast amount of sensitive data, and when these companies experience breaches, personal information is often compromised. Even if a breach doesn't affect you directly, your information may be sold on the dark web for later use. For updates on recent breaches, check <Link href="https://www.haveibeenpwned.com" target="_blank">Have I Been Pwned?</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight:150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Social Engineering</Typography>
            <Typography variant="body1">
              Thieves often use social engineering tactics like phishing emails or fake websites to trick people into revealing personal information. These deceptive tactics manipulate people into disclosing their passwords, bank details, or other sensitive data. Learn how to identify phishing attempts at <Link href="https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" target="_blank">FTC's Phishing Scam Tips</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight:150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Financial Gain</Typography>
            <Typography variant="body1">
              The main motivator behind identity theft is financial gain. Thieves use stolen identities to open fraudulent accounts, take out loans, or make unauthorized purchases. They can also sell stolen information to others on the black market. For more on financial fraud, visit <Link href="https://www.finra.org/investors/alerts" target="_blank">FINRA Investor Alerts</Link>.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 2, marginTop: 4 }}>
        The History of Identity Theft
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Identity theft isn't a new crime, but with the rise of digital technology, it has grown increasingly sophisticated. Here's a brief overview of how identity theft has evolved:
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, minHeight:250 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Pre-1990s: Early Days</Typography>
            <Typography variant="body1">
              Identity theft in its earliest form involved physical theft of documents like driver’s licenses, social security cards, and credit cards. Criminals would use this stolen information to create fraudulent checks or open unauthorized accounts. For more on early identity theft crimes, visit <Link href="https://www.history.com/topics/crime/identity-theft" target="_blank">History of Identity Theft</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, minHeight:250 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>1990s: Digital Expansion</Typography>
            <Typography variant="body1">
              With the expansion of the internet, identity theft began to take on new forms. The rise of online banking, shopping, and social media made it easier for thieves to access personal information remotely. Email phishing and the creation of fake websites became common tactics. Learn more at <Link href="https://www.encyclopedia.com/social-sciences-and-law/law/law/identity-theft" target="_blank">Encyclopedia of Law</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, minHeight:250 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>2000s: The Age of Data Breaches</Typography>
            <Typography variant="body1">
              By the early 2000s, high-profile data breaches at large corporations became more common. Retailers, credit bureaus, and healthcare organizations were frequently targeted. Thieves would access massive amounts of data, including credit card numbers, and sell it on the black market. For more on data breaches, check out <Link href="https://www.databreachtoday.com" target="_blank">Data Breach Today</Link>.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 2, marginTop: 4 }}>
        How to Prevent Identity Theft: Tips for Protecting Yourself
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        While identity theft can never be completely prevented, there are steps you can take to significantly reduce your risk. Here are some practical tips for safeguarding your personal information:
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight:150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Use Strong, Unique Passwords</Typography>
            <Typography variant="body1">
              Ensure that your passwords are strong and unique for each account. Avoid using easily guessable information like your name, birthdate, or common phrases. Consider using a password manager to store and generate secure passwords. For more on password security, visit <Link href="https://www.ncsc.gov.uk/guidance/creating-strong-passwords" target="_blank">NCSC Password Guidance</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight:150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Enable Two-Factor Authentication (2FA)</Typography>
            <Typography variant="body1">
              Whenever possible, enable two-factor authentication (2FA) on your accounts. This adds an extra layer of security by requiring you to enter a one-time code sent to your phone or email, in addition to your password. Learn more about 2FA at <Link href="https://www.cisa.gov/2fa" target="_blank">CISA: Two-Factor Authentication</Link>.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Conclusion */}
      <Typography variant="body1" sx={{ marginTop: 4 }}>
        By following these prevention tips and staying vigilant, you can reduce your chances of becoming a victim of identity theft. However, always be prepared for the possibility of a breach, and ensure that you have the tools and knowledge to quickly recover if necessary. Stay safe, and take control of your identity!
      </Typography>
    </Box>
  );
};

export default IdentityTheftArticle;

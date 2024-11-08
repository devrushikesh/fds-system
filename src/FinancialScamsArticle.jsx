import React, { useEffect } from 'react';
import { Grid, Typography, Box, Paper, Link } from '@mui/material';

const FinancialScamArticle = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ padding: 2, maxWidth: '1200px', margin: '0 auto' }}>


      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1A237E', textAlign: 'center', marginBottom: 4 }}>
        Understanding Financial Scams: What You Need to Know
      </Typography>

      {/* Image at the top of the article */}
      <Box sx={{ marginBottom: 4 }}>
        <img
          src="/images/financial-scam.jpeg"  // Your image path here
          alt="Financial Scams"
          style={{ width: '100%', height: '500px', borderRadius: '8px' }}
        />
      </Box>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Financial scams are fraudulent schemes designed to deceive individuals and organizations into giving away money or sensitive information. With advancements in technology, scammers have developed more sophisticated ways to exploit unsuspecting victims. In this article, we will explore common types of financial scams, their history, and effective strategies to avoid them. For more information on scams, visit <Link href="https://www.consumer.ftc.gov" target="_blank">FTC Consumer Information</Link>.
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 2 }}>
        Common Types of Financial Scams
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Scammers employ various tactics to exploit individuals. Below are some of the most common types of financial scams you should be aware of:
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight: 150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Investment Scams</Typography>
            <Typography variant="body1">
              Investment scams often promise high returns with little or no risk. Scammers lure people into schemes like Ponzi schemes, fake stocks, or foreign currency scams. Learn more at <Link href="https://www.sec.gov/investor/alerts-and-bulletins" target="_blank">SEC Investor Alerts</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight: 150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Phishing Scams</Typography>
            <Typography variant="body1">
              Phishing scams trick individuals into providing personal or financial information through fake emails or websites. These scams are increasingly sophisticated and may appear legitimate. For tips on spotting phishing, visit <Link href="https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" target="_blank">FTC Phishing Tips</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight: 150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Lottery Scams</Typography>
            <Typography variant="body1">
              Lottery scams involve emails or messages claiming you’ve won a prize and need to pay a fee to claim it. These scams can be highly convincing but are usually fraudulent. For more, see <Link href="https://www.fraud.org/scams/lottery_sweepstakes_prizes" target="_blank">Fraud.org Lottery Scams</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight: 150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Charity Scams</Typography>
            <Typography variant="body1">
              In charity scams, fraudsters pose as charities to solicit donations for fake causes. They often appear after natural disasters or crises. Verify charities at <Link href="https://www.charitynavigator.org" target="_blank">Charity Navigator</Link>.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 2, marginTop: 4 }}>
        The History of Financial Scams
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Financial scams have existed for centuries but have evolved with changes in technology and society. Here's a brief history:
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, minHeight: 250 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>19th Century: Early Ponzi Schemes</Typography>
            <Typography variant="body1">
              The first documented Ponzi schemes appeared in the 19th century, with fraudsters promising high returns from nonexistent investments. Charles Ponzi popularized the method in the 1920s. More at <Link href="https://www.investopedia.com/terms/p/ponzischeme.asp" target="_blank">Ponzi Scheme - Investopedia</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, minHeight: 250 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Late 20th Century: Internet Scams</Typography>
            <Typography variant="body1">
              With the rise of the internet in the 1990s, email and online scams became prevalent. Nigerian prince scams and phishing scams began during this time. Learn more at <Link href="https://www.historyofinternet.com/fraud.html" target="_blank">History of Internet Fraud</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2, minHeight: 250 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>21st Century: Digital Currency Scams</Typography>
            <Typography variant="body1">
              Recently, cryptocurrency has opened new doors for scams, including fake ICOs and crypto investment schemes. These scams leverage the popularity and mystery of digital currencies. Read more at <Link href="https://www.fbi.gov/scams-and-safety/common-scams-and-crimes" target="_blank">FBI's Scam Alerts</Link>.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 2, marginTop: 4 }}>
        Tips for Avoiding Financial Scams
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        You can protect yourself from financial scams by staying informed and cautious. Here are some tips:
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight: 150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Be Skeptical of Unsolicited Offers</Typography>
            <Typography variant="body1">
              Avoid sharing personal information with unsolicited callers, emails, or texts. Legitimate companies don’t ask for sensitive information this way. More at <Link href="https://www.consumer.ftc.gov/features/scam-alerts" target="_blank">FTC Scam Alerts</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, minHeight: 150 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Research Before You Invest</Typography>
            <Typography variant="body1">
              Don’t invest in anything without thoroughly researching it first. Scammers often create fake websites or use real company names to deceive victims. Learn more at <Link href="https://www.sec.gov/oiea/investor-alerts-bulletins" target="_blank">SEC Investor Alerts</Link>.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Conclusion */}
      <Typography variant="body1" sx={{ marginTop: 4 }}>
        Financial scams are constantly evolving, but by staying informed and cautious, you can protect yourself from falling victim. Always research and verify before sharing information or investing, and remember: if it sounds too good to be true, it probably is. Stay vigilant!
      </Typography>
    </Box>
  );
};

export default FinancialScamArticle;

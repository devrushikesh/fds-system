import React, { useEffect } from 'react';
import { Grid, Typography, Box, Paper, Link } from '@mui/material';

const SocialEngineeringArticle = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ padding: 2, maxWidth: '1200px', margin: '0 auto' }}>

      {/* Title */}
      <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1A237E', textAlign: 'center', marginBottom: 4 }}>
        Understanding Social Engineering: Protecting Yourself from Psychological Manipulation
      </Typography>

      {/* Hero Image */}
      <Box sx={{ marginBottom: 4 }}>
        <img
          src="/images/social-engineering.jpeg" // Replace with actual image path
          alt="Social Engineering"
          style={{ width: '100%', height: '500px', borderRadius: '8px' }}
        />
      </Box>


      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Social engineering is the use of psychological manipulation to trick individuals into divulging confidential information or performing actions that may compromise security. Unlike technical hacking, social engineering exploits human nature, often bypassing technical safeguards. This guide covers how social engineering works, the methods used by attackers, and how to protect yourself from falling victim to these schemes. For more information, visit the <Link href="https://www.cisa.gov" target="_blank">CISA Social Engineering Resources</Link>.
      </Typography>

      {/* How Social Engineering Works */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 2 }}>
        How Social Engineering Works
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Social engineering attacks exploit human tendencies, such as trust, fear, curiosity, and urgency. Attackers pose as trusted individuals or entities, convincing targets to share sensitive data, open malicious files, or follow harmful instructions. Successful attacks often use a combination of tactics, including research, psychological manipulation, and exploitation of organizational policies.
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Attackers may conduct extensive research on their targets to increase credibility, utilizing information available on social media or other public platforms. Once an attacker has gained enough information, they may proceed with one of many social engineering tactics designed to extract specific information or access.
      </Typography>

      {/* Common Social Engineering Tactics */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 2, marginTop: 4 }}>
        Common Social Engineering Tactics
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Phishing</Typography>
            <Typography variant="body1">
              Phishing is one of the most common social engineering tactics. Attackers send fraudulent emails or messages pretending to be reputable entities, often including urgent calls to action, like “Verify your account.” Links lead to fake websites designed to steal login credentials or install malware. Learn more at <Link href="https://www.phishing.org" target="_blank">Phishing.org</Link>.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Pretexting</Typography>
            <Typography variant="body1">
              Pretexting involves an attacker creating a fabricated scenario, or "pretext," to extract information. For example, an attacker might pose as an IT administrator asking for login details to resolve a security issue. Pretexting requires thorough planning, as attackers need enough background information to appear credible.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Baiting</Typography>
            <Typography variant="body1">
              In baiting, attackers offer something enticing, like free software or downloads, to trick users into clicking malicious links or attachments. Baiting often preys on curiosity, leading users to unknowingly install malware or compromise their systems.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Tailgating</Typography>
            <Typography variant="body1">
              Tailgating, or "piggybacking," occurs when an unauthorized individual gains physical access to a restricted area by following an authorized person. This method can bypass security measures simply by exploiting human politeness, such as holding a door open for a stranger.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Quid Pro Quo</Typography>
            <Typography variant="body1">
              In a quid pro quo attack, scammers promise a service or benefit in exchange for information. For example, an attacker might pose as tech support offering to resolve an issue, asking the target to reveal login credentials or other sensitive information to “fix” the problem.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Signs of a Social Engineering Attack */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 2, marginTop: 4 }}>
        Recognizing Social Engineering Red Flags
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Being aware of social engineering red flags can help you identify potential threats. Here are some common signs to look out for:
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Urgent Requests</Typography>
            <Typography variant="body1">
              Attackers often create a false sense of urgency to encourage quick action without careful consideration. If someone demands immediate action, verify their identity before proceeding.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Requests for Confidential Information</Typography>
            <Typography variant="body1">
              Be cautious of unsolicited requests for sensitive information, especially if the request comes through unconventional channels like text messages or personal emails.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Unfamiliar Senders or Phone Numbers</Typography>
            <Typography variant="body1">
              Unknown or suspicious email addresses, phone numbers, or profiles should raise caution. Verify the sender’s identity through official channels before engaging further.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Prevention Tips */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1A237E', marginBottom: 2, marginTop: 4 }}>
        Tips for Preventing Social Engineering Attacks
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Implementing the following practices can help protect you from social engineering attempts:
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Be Skeptical of Unsolicited Communication</Typography>
            <Typography variant="body1">
              If you receive an unexpected message, email, or call asking for information, take time to verify the sender's identity. Contact the person or organization directly using official contact details before responding.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Use Multi-Factor Authentication (MFA)</Typography>
            <Typography variant="body1">
              MFA adds an extra layer of security by requiring a second form of verification, such as a code sent to your mobile device. Enabling MFA can prevent unauthorized access even if your password is compromised.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Educate Yourself and Your Team</Typography>
            <Typography variant="body1">
              Regular training on social engineering threats can help raise awareness and reduce risk. Understanding how to recognize and respond to these tactics can make individuals less susceptible to manipulation.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box sx={{ marginTop: 4, padding: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body2">
          For more details on staying secure, visit the <Link href="https://www.cisa.gov" target="_blank">Cybersecurity and Infrastructure Security Agency (CISA)</Link>.
        </Typography>
      </Box>
    </Box>
  );
};

export default SocialEngineeringArticle;

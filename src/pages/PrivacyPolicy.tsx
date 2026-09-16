import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const sections = [
  {
    title: 'Overview',
    body: 'GAP Calculator (GPA Academic Planner) is designed with your privacy in mind. The application runs entirely in your web browser and does not require you to create an account or sign in.',
  },
  {
    title: 'Data We Do NOT Collect',
    body: 'We do not collect, store, or transmit any personal data on a server. No names, email addresses, student IDs, grades, or academic records are ever sent to or stored by us. There are no cookies, no analytics tracking pixels, and no advertising identifiers.',
  },
  {
    title: 'What Is Stored Locally on Your Device',
    body: 'Your saved semester results (module grades, GPA, programme, university, and timestamps) are stored locally in your browser\'s localStorage. This data never leaves your device. You can delete it at any time by clicking "Reset All Data" in the CGPA Summary card, or by clearing your browser\'s localStorage/cache.',
  },
  {
    title: 'GAP Bot (AI Chatbot)',
    body: 'GAP Bot is an AI assistant powered by the Groq API. When you send a message, it is processed by Groq\'s servers solely to generate a reply. We do not store your conversations or share them with anyone. GAP Bot does not retain or remember anything you discuss after you close the page. No student data is stored by us or used to train any model.',
  },
  {
    title: 'Optional Visitor Counter',
    body: 'A lightweight, anonymous page-visit counter may be used to track general usage (total views only, no personal data). If enabled, one anonymous request is sent per page load. No personally identifiable information is included. The data is stored as a single incrementing counter and cannot be linked to any individual.',
  },
  {
    title: 'Third-Party Links',
    body: 'The application links to external sites (GitHub, university websites). We are not responsible for the privacy practices of those external sites.',
  },
  {
    title: 'Children\'s Privacy',
    body: 'GAP Calculator is not directed at children under 13. We do not knowingly collect information from anyone.',
  },
  {
    title: 'Changes to This Policy',
    body: 'Any changes to this privacy policy will be reflected on this page. The version at the top of this page was last updated with the current release of the application.',
  },
  {
    title: 'Contact',
    body: 'GAP Calculator is created and maintained by DTC Group. For privacy-related questions, please reach out via the project\'s GitHub repository: https://github.com/mrdino-tz/GAP',
  },
];

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Box sx={{ maxWidth: 900, mx: 'auto', px: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src={`${import.meta.env.BASE_URL}LOGO.png`} alt="GAP Logo" style={{ height: 32, width: 'auto' }} />
            <Typography variant="h6" fontWeight={700}>GAP</Typography>
          </Box>
          <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }} onClick={() => navigate('/')}>
            ← Back to Calculator
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 800, mx: 'auto', px: 3, py: 6 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>Privacy Policy</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
          Last updated: September 16, 2026
        </Typography>

        {sections.map((section, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent sx={{ '&:last-child': { pb: 2 } }}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>{section.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{section.body}</Typography>
            </CardContent>
            {index < sections.length - 1 && <Divider />}
          </Card>
        ))}

        <Typography variant="body2" color="text.secondary" sx={{ mt: 4, textAlign: 'center' }}>
          Developed by DTC Group
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;
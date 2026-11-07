import GPACalculator from '@/components/GPACalculator';
import heroImage from '@/assets/hero-academic.jpg';
import { Box, Typography, Container } from '@mui/material';
import { MinimalFooter } from '@/components/ui/minimal-footer';

const Index = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          position: 'relative',
          height: 256,
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            bgcolor: 'primary.main',
            opacity: 0.8,
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'primary.contrastText' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 1 }}>
            <img src={`${import.meta.env.BASE_URL}LOGO.png`} alt="GAP Logo" style={{ height: '80px', width: 'auto' }} />
            <Typography variant="h1" sx={{ fontWeight: 700 }}>
              GAP
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 300, opacity: 0.9 }}>
            Official GPA Calculator
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, opacity: 0.75 }}>
            Accurate • Easy to Use
          </Typography>
        </Box>
      </Box>

      <GPACalculator />

      <Box sx={{ flexGrow: 1 }} />

      <MinimalFooter
        year={new Date().getFullYear()}
      />
    </Box>
  );
};

export default Index;
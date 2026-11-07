import { Box, Typography, Container } from '@mui/material';

interface MinimalFooterProps {
  year?: number;
  copyrightText?: string;
}

export function MinimalFooter({
  year = new Date().getFullYear(),
  copyrightText = 'GAP - GPA Calculator',
}: MinimalFooterProps) {
  return (
    <Box
      sx={{
        py: 4,
        borderTop: 1,
        borderColor: 'divider',
        bgcolor: 'grey.100',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {year} GAP - GPA Calculator . Developed with 💙 by MrDino-Tz
        </Typography>
        <div sx={{ mt: 2, fontSize: 12, color: 'text.secondary' }}>
          <a href="https://tcu.go.tz/-TCU" style={{ margin: '0 8px', color: 'currentColor' }}>
            TCU
          </a>
          <a href="https://nactvet.go.tz/-NACTVET" style={{ margin: '0 8px', color: 'currentColor' }}>
            NACTVET
          </a>
          <a href="https://www.heslb.go.tz/" style={{ margin: '0 8px', color: 'currentColor' }}>
            HESLB
          </a>
          <a href="https://mwandishi.dtcwonders.online/" style={{ margin: '0 8px', color: 'currentColor' }}>
            CV Writing
          </a>
        </div>
      </Container>
    </Box>
  );
}
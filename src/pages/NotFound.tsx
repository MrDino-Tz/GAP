import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100' }}>
      <Box textAlign="center">
        <Typography variant="h2" fontWeight={700} mb={2}>404</Typography>
        <Typography variant="h6" color="text.secondary" mb={2}>Oops! Page not found</Typography>
        <Link href="/" underline="always" color="primary.main">
          Return to Home
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;

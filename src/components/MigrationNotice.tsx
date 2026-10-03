import { useEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { NEW_SITE_URL } from "@/lib/deployment";

/**
 * Full-screen notice shown in place of the app on the retired GitHub Pages
 * deployment. The app itself is not rendered, so none of its content is
 * reachable from gh-pages.
 */
export default function MigrationNotice() {
  useEffect(() => {
    document.title = "GAP has moved to gap.dtcwonders.online";
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 6,
        bgcolor: "background.default",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, sm: 5 },
          maxWidth: 560,
          width: "100%",
          textAlign: "center",
          borderTop: 4,
          borderColor: "primary.main",
        }}
      >
        <img
          src={`${import.meta.env.BASE_URL}LOGO.png`}
          alt="GAP"
          style={{ display: "block", margin: "0 auto 10px", height: 76, width: "auto" }}
        />

        <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 2 }}>
          GAP — GPA Academic Planner
        </Typography>

        <Typography variant="h4" component="h1" sx={{ mt: 1, fontWeight: 700 }}>
          Looking for GAP-GPA Calculator?
        </Typography>

        <Typography variant="h6" color="primary" sx={{ mt: 1, fontWeight: 600 }}>
          We have moved to a new home.
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          This site is no longer maintained and will be shut down. GAP now lives at
          its own address, where all programmes, GPA calculators and the academic
          advisor are up to date.
        </Typography>

        <Button
          href={NEW_SITE_URL}
          variant="contained"
          size="large"
          sx={{ mt: 4, px: 5, py: 1.5, fontWeight: 700 }}
        >
          Go to gap.dtcwonders.online
        </Button>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          If the button does not work, copy this address into your browser:
          <br />
          <Box
            component="span"
            sx={{ fontWeight: 600, wordBreak: "break-all", userSelect: "all" }}
          >
            {NEW_SITE_URL}
          </Box>
        </Typography>
      </Paper>
    </Box>
  );
}

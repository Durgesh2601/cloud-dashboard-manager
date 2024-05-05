import React from "react";
import { Typography, Button, Grid } from "@mui/material";

const Fallback: React.FC = () => {
  const handleRetry = () => {
    window.location.href = window.location?.origin;
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ height: "100vh" }}
    >
      <Grid item>
        <Typography variant="h4" align="center">
          Oops! It’s not you, it’s us.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" align="center">
          We're sorry, but an unexpected error occurred.
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={handleRetry}>
          Retry
        </Button>
      </Grid>
    </Grid>
  );
};

export default Fallback;

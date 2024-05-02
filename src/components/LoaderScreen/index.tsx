import { CircularProgress, Grid } from "@mui/material";

const LoaderScreen = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <CircularProgress color="primary" />
    </Grid>
  );
};

export default LoaderScreen;

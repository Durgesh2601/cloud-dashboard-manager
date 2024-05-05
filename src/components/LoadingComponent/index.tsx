import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const LoadingComponent = () => {
  return (
    <Grid
      item
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight={600}
    >
      <CircularProgress />
    </Grid>
  );
};

export default LoadingComponent;

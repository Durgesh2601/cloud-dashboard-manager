import { Grid, Typography } from "@mui/material";
import { commonGridStyles } from "../../../../constants";

const Alerts = () => {
  return (
    <Grid
      item
      sx={{
        ...commonGridStyles,
      }}
      p={3}
    >
      <Typography variant="h5">No Alerts</Typography>
    </Grid>
  );
};

export default Alerts;

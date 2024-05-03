import { Grid } from "@mui/material";
import SystemMetrics from "./SystemMetrics";
import SystemInfo from "./SystemInfo";
import EventHistory from "../EventHistory";

const Overview = () => {
  return (
    <Grid container>
      <SystemInfo />
      <Grid item sx={{ width: "100%" }} mt={1}>
        <Grid container display="flex" sx={{ width: "100%" }} gap={1}>
          <SystemMetrics />
          <EventHistory />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Overview;

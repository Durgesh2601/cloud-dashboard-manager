import { Grid } from "@mui/material";
import { renderGridHeader, commonGridStyles } from "./common";

const SystemMetrics = ({}) => {
  return (
    <Grid
      item
      sx={{
        ...commonGridStyles,
        width: "49.5%",
        height: "40vh",
      }}
      p={2}
    >
      {renderGridHeader("System metrics")}
      <SystemMetrics />
    </Grid>
  );
};

export default SystemMetrics;

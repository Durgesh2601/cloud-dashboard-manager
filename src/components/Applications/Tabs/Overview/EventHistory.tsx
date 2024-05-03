import { Grid } from "@mui/material";
import { renderGridHeader, commonGridStyles } from "./common";

const EventHistory = () => {
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
      {renderGridHeader("Event History")}
    </Grid>
  );
};

export default EventHistory;
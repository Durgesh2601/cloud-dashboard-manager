import { Grid } from "@mui/material";
import { RenderGridHeader } from "../../../../HelperComponents";
import { commonGridStyles } from "../../../../../constants";

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
      <RenderGridHeader title={"Event History"} />
    </Grid>
  );
};

export default EventHistory;

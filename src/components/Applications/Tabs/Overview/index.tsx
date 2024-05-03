import { Grid } from "@mui/material";

const commonGridStyles = {
  border: "1px solid #f8f8f8",
  backgroundColor: "white",
  height: "20vh",
  width: "100%",
  borderRadius: "0.5em",
  boxShadow: 1,
};
const Overview = () => {
  return (
    <Grid container>
      <Grid
        item
        sx={{
          ...commonGridStyles,
        }}
      ></Grid>
      <Grid item sx={{ width: "100%" }} mt={1}>
        <Grid container display="flex" sx={{ width: "100%" }} gap={1}>
          <Grid
            item
            sx={{
              ...commonGridStyles,
              width: "49.5%",
              height: "40vh",
            }}
          ></Grid>
          <Grid
            item
            sx={{
              ...commonGridStyles,
              width: "49.5%",
              height: "40vh",
            }}
          ></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Overview;

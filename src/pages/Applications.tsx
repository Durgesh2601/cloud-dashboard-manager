import { Grid } from "@mui/material";

const Applications = () => {
  return (
    <Grid item xs position="absolute" right={0} left={70}>
      <Grid
        sx={{
          background: "#FFFFFF",
          position: "sticky",
          top: 0,
          zIndex: 999,
          borderBottom: "1px solid red",
        }}
      >
        Applications
      </Grid>
    </Grid>
  );
};

export default Applications;

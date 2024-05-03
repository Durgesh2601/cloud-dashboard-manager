import { Button, Grid, Typography } from "@mui/material";
import { Application } from "../../../pages/Applications";

interface AppsHeaderProps {
  application: Application;
}

const AppsHeader = ({ application }: AppsHeaderProps) => {
  return (
    <Grid container mt={2} ml={1} pl={1} pr={2}>
      <Grid item xs={12} display="flex" justifyContent="space-between">
        <Typography variant="h5">{application?.name}</Typography>
        <Button color="primary">Deployed</Button>
      </Grid>
    </Grid>
  );
};

export default AppsHeader;

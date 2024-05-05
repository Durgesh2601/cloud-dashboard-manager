import { Button, Grid, Typography } from "@mui/material";
import { useLayout } from "../../../context/LayoutContext";
import { APP_STATUS_MAP } from "../../../constants";

const AppsHeader = () => {
  const { selectedApp } = useLayout();
  return (
    <Grid container mt={2} pl={4} pr={2}>
      <Grid item xs={12} display="flex" justifyContent="space-between">
        <Typography variant="h5">{selectedApp?.name}</Typography>
        <Button color="primary">
          {APP_STATUS_MAP[selectedApp?.status as keyof typeof APP_STATUS_MAP]}
        </Button>
      </Grid>
    </Grid>
  );
};

export default AppsHeader;

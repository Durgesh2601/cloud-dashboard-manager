import { Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <Grid item position="fixed" width={85} zIndex="drawer">
      <Sidebar />
    </Grid>
  );
};

export default MainLayout;

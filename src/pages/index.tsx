import { Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <Grid container>
      <Grid item position="fixed" width={85} zIndex="drawer">
        <Sidebar />
      </Grid>
      <Grid item xs position="absolute" right={0} left={70}>
        <Grid
          sx={{
            background: "#FFFFFF",
            position: "sticky",
            top: 0,
            zIndex: 999,
            border:'1px solid red'
          }}
        >
          {/* <Topbar /> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainLayout;

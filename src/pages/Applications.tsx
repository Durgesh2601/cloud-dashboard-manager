import { Grid } from "@mui/material";
import TopBar from "../components/Applications/TopBar";
import AppsHeader from "../components/Applications/Header";
import AppTabs from "../components/Applications/Tabs";
import { useLayout } from "../context/LayoutContext";

const Applications = () => {
  const { isDrawerOpen } = useLayout();
  return (
    <Grid
      item
      xs
      position="absolute"
      right={0}
      left={isDrawerOpen ? 200 : 60}
      p={1}
    >
      <TopBar />
      <AppsHeader
        application={{
          id: 1,
          name: "tic-tac-toc",
        }}
      />
      <AppTabs />
    </Grid>
  );
};

export default Applications;

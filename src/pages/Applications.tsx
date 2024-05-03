import { Grid } from "@mui/material";
import TopBar from "../components/Applications/TopBar";
import AppsHeader from "../components/Applications/Header";
import AppTabs from "../components/Applications/Tabs";

const Applications = () => {
  return (
    <Grid item xs position="absolute" right={0} left={210}>
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

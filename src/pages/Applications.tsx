import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import TopBar from "../components/Applications/TopBar";
import AppsHeader from "../components/Applications/Header";
import AppTabs from "../components/Applications/Tabs";
import { useLayout } from "../context/LayoutContext";

const TransitionGrid = styled(Grid)<{ drawerWidth: number }>(
  ({ theme, drawerWidth }) => ({
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  })
);

const Applications = () => {
  const { isDrawerOpen } = useLayout();
  const [drawerWidth, setDrawerWidth] = useState(0);

  useEffect(() => {
    setDrawerWidth(isDrawerOpen ? 200 : 65);
  }, [isDrawerOpen]);

  return (
    <TransitionGrid drawerWidth={drawerWidth}>
      <Grid item xs>
        <TopBar />
        <AppsHeader
          application={{
            id: 1,
            name: "tic-tac-toc",
          }}
        />
        <AppTabs />
      </Grid>
    </TransitionGrid>
  );
};

export default Applications;

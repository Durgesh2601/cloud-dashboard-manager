import { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import TopBar from "../components/Applications/TopBar";
import AppsHeader from "../components/Applications/Header";
import AppTabs from "../components/Applications/Tabs";
import { useLayout } from "../context/LayoutContext";
import useFetchAppData from "../hooks/useFetchAppData";
import LoadingComponent from "../components/LoadingComponent";

export interface Application {
  id: number;
  name: string;
  status: string;
  version: string | null;
  updatedAt: string;
  desiredVersion: string;
}

const TransitionGrid = styled(Grid)(({ theme }) => ({
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));

const Applications = () => {
  const { isLoading } = useFetchAppData();
  const [marginLeft, setMarginLeft] = useState(0);
  const { applications, isDrawerOpen } = useLayout();

  useEffect(() => {
    setMarginLeft(isDrawerOpen ? 200 : 65);
  }, [isDrawerOpen]);

  return (
    <TransitionGrid style={{ marginLeft }}>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <Grid item xs>
          <TopBar applications={applications} />
          <Button onClick={() => {
            throw new Error("This is an error");
          }}>Throw Error</Button>
          <AppsHeader />
          <AppTabs />
        </Grid>
      )}
    </TransitionGrid>
  );
};

export default Applications;

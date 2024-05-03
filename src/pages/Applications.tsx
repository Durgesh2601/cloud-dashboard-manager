import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import TopBar from "../components/Applications/TopBar";
import AppsHeader from "../components/Applications/Header";
import AppTabs from "../components/Applications/Tabs";
import { useLayout } from "../context/LayoutContext";
import { getApplications } from "../api";

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
  const [marginLeft, setMarginLeft] = useState(0);
  const [applications, setApplications] = useState<Application[]>([]);
  const [selectedApp, setSelectedApp] = useState<number | string>("");
  const { isDrawerOpen } = useLayout();

  useEffect(() => {
    (async function fetchApplications() {
      try {
        const response = await getApplications();
        setApplications(response);
        setSelectedApp(response[0].id);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    })();
  }, []);

  useEffect(() => {
    setMarginLeft(isDrawerOpen ? 200 : 65);
  }, [isDrawerOpen]);

  return (
    <TransitionGrid style={{ marginLeft }}>
      <Grid item xs>
        <TopBar
          applications={applications}
          selectedApp={selectedApp}
          setSelectedApp={setSelectedApp}
        />
        <AppsHeader
          application={
            selectedApp
              ? applications?.find((app) => app.id === selectedApp)
              : applications?.[0]
          }
        />
        <AppTabs />
      </Grid>
    </TransitionGrid>
  );
};

export default Applications;

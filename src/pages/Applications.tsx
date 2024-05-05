import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import TopBar from "../components/Applications/TopBar";
import AppsHeader from "../components/Applications/Header";
import AppTabs from "../components/Applications/Tabs";
import { useLayout } from "../context/LayoutContext";
import {
  getAppCpuUtilization,
  getAppEventHistory,
  getAppMemoryUtilization,
  getApplications,
} from "../api";

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
  const {
    applications,
    setApplications,
    isDrawerOpen,
    setSelectedApp,
    setEventHistory,
    setMemoryUtilization,
    setCpuUtilization,
  } = useLayout();

  const fetchApplications = async () => {
    try {
      const response = await getApplications();
      setApplications(response);
      setSelectedApp(response[0]);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  const fetchEventHistory = async () => {
    try {
      const response = await getAppEventHistory();
      setEventHistory(response);
    } catch (error) {
      console.error("Error fetching event history:", error);
    }
  };

  const fetchMemoryUtilization = async () => {
    try {
      const response = await getAppMemoryUtilization();
      setMemoryUtilization(response);
    } catch (error) {
      console.error("Error fetching memory utilization:", error);
    }
  };

  const fetchCpuUtilization = async () => {
    try {
      const response = await getAppCpuUtilization();
      setCpuUtilization(response);
    } catch (error) {
      console.error("Error fetching CPU utilization:", error);
    }
  };

  useEffect(() => {
    fetchApplications();
    fetchEventHistory();
    fetchMemoryUtilization();
    fetchCpuUtilization();
  }, []);

  useEffect(() => {
    setMarginLeft(isDrawerOpen ? 200 : 65);
  }, [isDrawerOpen]);

  return (
    <TransitionGrid style={{ marginLeft }}>
      <Grid item xs>
        <TopBar applications={applications} />
        <AppsHeader />
        <AppTabs />
      </Grid>
    </TransitionGrid>
  );
};

export default Applications;

import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ComputerIcon from "@mui/icons-material/Computer";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import HistoryIcon from "@mui/icons-material/History";
import { GoTools } from "react-icons/go";
import Overview from "./Overview";
import EnvironmentVars from "./Envs";
import Alerts from "./Alerts";
import EventHistory from "./Overview/EventHistory";
import { TabItem, TabItemMap, TabPanelProps } from "../../../types";
import { Grid } from "@mui/material";

const TabItems: TabItem[] = [
  {
    label: "Overview",
    key: "overview",
    content: "Overview",
    icon: <ComputerIcon />,
  },
  {
    label: "Environment Variables",
    key: "envs",
    content: "Environment Variables",
    icon: <GoTools />,
  },
  {
    label: "Alerts",
    key: "alerts",
    content: "Alerts",
    icon: <WarningAmberIcon />,
  },
  {
    label: "Event history",
    key: "event_history",
    content: "Event history",
    icon: <HistoryIcon />,
  },
];

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AppTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("event", event);
    setValue(newValue);
  };

  const TabItemMap: TabItemMap = {
    overview: <Overview />,
    envs: <EnvironmentVars />,
    alerts: <Alerts />,
    event_history: <EventHistory />,
  };

  return (
    <Grid item sx={{ width: "100%" }}>
      <Box pl={2}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
            "& .MuiTab-root": {
              minHeight: 0,
            },
          }}
        >
          {TabItems.map((tab, index) => (
            <Tab
              key={tab.key}
              icon={tab.icon}
              label={tab.label}
              iconPosition="start"
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      {TabItems.map((tab, index) => (
        <CustomTabPanel key={tab.key} value={value} index={index}>
          {TabItemMap[tab.key] || null}
        </CustomTabPanel>
      ))}
    </Grid>
  );
};

export default AppTabs;

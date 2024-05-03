import { useState } from "react";
import {
  Avatar,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { orange } from "@mui/material/colors";

const TopBar = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "tic-tac-toc",
      status: "deployed",
      version: "1.2.1",
      updatedAt: "1714454128",
      desiredVersion: "1.2.2",
    },
    {
      id: 2,
      name: "sudoku",
      status: "uninstalled",
      version: "null",
      updatedAt: "1714443328",
      desiredVersion: "2.2.0",
    },
    {
      id: 3,
      name: "chess",
      status: "deployed",
      version: "9.0.8",
      updatedAt: "1714356928",
      desiredVersion: "9.0.8",
    },
  ]);
  const [selectedApp, setSelectedApp] = useState(applications[0]?.id);
  const handleChangeApp = (event: SelectChangeEvent) => {
    setSelectedApp(Number(event.target.value));
  };
  return (
    <Grid
      container
      sx={{
        minHeight: "4.5em",
        borderBottom: "1px solid #e0e0e0",
      }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <FormControl sx={{ mt: 2, minWidth: 80 }}>
          <InputLabel id="select-app">Applications</InputLabel>
          <Select
            labelId="select-app"
            value={String(selectedApp)}
            onChange={handleChangeApp}
            autoWidth
            sx={{
              height: 35,
              border: "none",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            label="Applications"
          >
            {applications.map((app) => (
              <MenuItem key={app?.id} value={app?.id}>
                {app?.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item display="flex" alignItems="center">
        <Avatar sx={{ bgcolor: orange[300] }}>JD</Avatar>
        <Select
          value="JD"
          sx={{
            height: 30,
            border: "none",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value="JD">John Doe</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
};

export default TopBar;

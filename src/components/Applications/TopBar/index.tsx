import { useEffect, useState } from "react";
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
import { Application } from "../../../pages/Applications";

interface TopBarProps {
  applications: Application[];
  selectedApp: number | string;
  setSelectedApp: (id: number) => void;
}

const TopBar = ({ applications, selectedApp, setSelectedApp }: TopBarProps) => {

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
            {applications?.map((app) => (
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
            height: 35,
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

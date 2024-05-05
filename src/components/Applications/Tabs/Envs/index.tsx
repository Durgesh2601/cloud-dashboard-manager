import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Drawer,
  TextField,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  commonGridStyles,
  iconStyle,
  commonBoxStyles,
} from "../../../../constants";
import { useLayout } from "../../../../context/LayoutContext";
import {
  getEnvsFromLocalStorage,
  getMappedEnvs,
  storeEnvsInLocalStorage,
} from "../../../../utils";
import { Message } from "@mui/icons-material";

interface EnvVar {
  name: string;
  value: string;
}

const EnvironmentVars: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [envs, setEnvs] = useState<EnvVar[]>([]);
  const [showAddField, setShowAddField] = useState<boolean>(false);
  const [newEnvName, setNewEnvName] = useState<string>("");
  const [newEnvValue, setNewEnvValue] = useState<string>("");
  const { selectedApp } = useLayout();

  useEffect(() => {
    if (!selectedApp || !selectedApp?.id) return;
    const storedEnvs = getEnvsFromLocalStorage()?.[selectedApp?.id] || {};
    const mappedValues = getMappedEnvs(storedEnvs);
    setEnvs(mappedValues);
  }, [selectedApp]);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleAddField = () => {
    setShowAddField(!showAddField);
    resetStates();
  };

  const handleSave = () => {
    if (!selectedApp?.id) return;
    // Save the environment variables to localStorage
    const envVars = envs.reduce<Record<string, string>>((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
    }, {});

    const existingVars = getEnvsFromLocalStorage();
    const envsToBeStored = {
      ...existingVars,
      [selectedApp?.id]: envVars,
    };
    storeEnvsInLocalStorage(envsToBeStored);
    setIsDrawerOpen(false);
  };

  const handleCancel = () => {
    setIsDrawerOpen(false);
    resetStates();
  };

  const resetStates = () => {
    setNewEnvName("");
    setNewEnvValue("");
  };

  const handleAddEnv = () => {
    if (!newEnvName || !newEnvValue) return;
    const newEnv: EnvVar = { name: newEnvName, value: newEnvValue };
    setEnvs([...envs, newEnv]);
    resetStates();
  };

  const handleRemoveEnv = (env: EnvVar) => {
    if (!selectedApp?.id) return;
    const filteredEnvs = envs?.filter((item) => item?.name !== env?.name);
    const existingEnvs = getEnvsFromLocalStorage();
    const envsToBeStored = {
      ...existingEnvs,
      [selectedApp?.id]: filteredEnvs,
    };
    storeEnvsInLocalStorage(envsToBeStored);
    setEnvs(filteredEnvs);
  };

  const downloadEnvs = () => {
    if (!selectedApp) return;
    const storedEnvs = getEnvsFromLocalStorage()?.[selectedApp?.id];
    const envsJson = JSON.stringify(storedEnvs, null, 2);
    const blob = new Blob([envsJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "environment_variables.json";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <Grid
      container
      sx={{
        ...commonGridStyles,
        minHeight: "40vh",
      }}
    >
      <Grid item p={2} display="flex" justifyContent="space-between">
        <Typography variant="h6">Environment Variables</Typography>
        <Box display="flex" gap={1} pr={1}>
          <AddIcon
            sx={{ ...iconStyle, cursor: "pointer" }}
            onClick={toggleDrawer}
          />
          <DownloadIcon sx={{ ...iconStyle }} onClick={downloadEnvs} />
        </Box>
      </Grid>
      {Boolean(envs?.length) ? (
        envs?.map((env, index) => (
          <Box
            key={index}
            sx={{
              ...commonBoxStyles,
            }}
            ml={2}
            mb={1}
            pt={1}
            pb={1}
            pl={2}
            pr={2}
            display="flex"
            justifyContent="space-between"
          >
            <Typography>{env?.name}</Typography>
            <Typography>{env?.value}</Typography>
            <DeleteForeverIcon
              sx={{ ...iconStyle }}
              onClick={() => handleRemoveEnv(env)}
            />
          </Box>
        ))
      ) : (
        <Typography ml={2}>No environment variable created.</Typography>
      )}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          p={2}
          m={1}
          minWidth={400}
          sx={{ ...commonGridStyles, height: "fit-content" }}
        >
          {showAddField ? (
            <Box display="flex" mb={2} alignItems="center">
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                value={newEnvName}
                onChange={(e) => setNewEnvName(e.target.value)}
                sx={{ mr: 1 }}
              />
              <TextField
                label="Value"
                variant="outlined"
                size="small"
                value={newEnvValue}
                onChange={(e) => setNewEnvValue(e.target.value)}
                sx={{ mr: 1 }}
              />
              <Button
                variant="contained"
                startIcon={<DownloadDoneIcon sx={{ ...iconStyle }} />}
                onClick={handleAddEnv}
              >
                Add
              </Button>
            </Box>
          ) : (
            <Box mb={2}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={toggleAddField}
              >
                Add Environment Variable
              </Button>
            </Box>
          )}
          {envs.map((env, index) => (
            <Box key={index} display="flex" mb={2}>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                value={env.name}
                fullWidth
                style={{ marginRight: "8px" }}
                onChange={(e) => {
                  const newEnvs = [...envs];
                  newEnvs[index].name = e.target.value;
                  setEnvs(newEnvs);
                }}
              />
              <TextField
                label="Value"
                variant="outlined"
                size="small"
                value={env.value}
                fullWidth
                onChange={(e) => {
                  const newEnvs = [...envs];
                  newEnvs[index].value = e.target.value;
                  setEnvs(newEnvs);
                }}
              />
            </Box>
          ))}
          {showAddField && (
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button variant="outlined" onClick={handleCancel} sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleSave}>
                Save
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </Grid>
  );
};

export default EnvironmentVars;

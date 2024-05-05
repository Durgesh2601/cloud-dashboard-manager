import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RenderGridHeader } from "../../../../HelperComponents";
import { useLayout } from "../../../../../context/LayoutContext";
import { calculateTimeElapsed } from "../../../../../utils";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const SystemInfo = () => {
  const { selectedApp } = useLayout();
  const isSync = selectedApp?.version === selectedApp?.desiredVersion;
  const renderInSync = (
    <Box display="flex" gap={1}>
      <CheckCircleIcon color="success" fontSize="small" />
      <Typography variant="body2">In Sync</Typography>
    </Box>
  );
  return (
    <Accordion
      sx={{
        width: "100%",
      }}
      defaultExpanded
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <RenderGridHeader title={"System info"} />
      </AccordionSummary>
      <AccordionDetails>
        <Grid
          container
          sx={{
            width: "40%",
          }}
          spacing={12}
        >
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Current Version
            </Typography>
            <Typography variant="body2" mt={1}>
              {isSync
                ? renderInSync
                : selectedApp?.version === "null"
                ? "N/A"
                : selectedApp?.version}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              Desired Version
            </Typography>
            <Typography variant="body2" mt={1}>
              {selectedApp?.desiredVersion}
            </Typography>
          </Grid>
        </Grid>
        <Grid item display="flex" justifyContent="space-between" mt={3}>
          <Button
            variant="contained"
            disabled={isSync || selectedApp?.status === "uninstalled"}
          >
            Deploy
          </Button>
          <Typography variant="body2">
            {calculateTimeElapsed(selectedApp?.updatedAt || "")}
          </Typography>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default SystemInfo;

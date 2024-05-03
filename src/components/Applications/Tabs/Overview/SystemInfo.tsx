import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { renderGridHeader } from "./common";

const SystemInfo = () => {
  return (
    <Accordion
      sx={{
        width: "100%",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {renderGridHeader("Overview")}
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
  );
};

export default SystemInfo;

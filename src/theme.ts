import { createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export const CUSTOM_COLORS = {
  primary: "#37146B",
  secondary: "#FFFFFF",
};

const theme = createTheme({
  palette: {
    primary: deepPurple,
    background: {
      default: "#37146B",
    },
  },
});

export default theme;

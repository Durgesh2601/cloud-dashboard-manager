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
      default: "#f8f8f8",
    },
  },
  typography: {
    fontFamily: ["Inter, sans-serif"].join(","),
    fontSize: 12,
  },
});

export default theme;

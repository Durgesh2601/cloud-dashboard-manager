import { ThemeProvider } from "@emotion/react";
import MainLayout from "./pages";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;

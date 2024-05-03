import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Applications from "./pages/Applications.tsx";
import NotFound from "./components/NotFound/index.tsx";
import AppLayout from "./App.tsx";
import theme from "./theme.ts";
import "./index.css";
import { LayoutProvider } from "./context/LayoutContext.tsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Applications />,
        errorElement: <NotFound />,
      },
      {
        path: "*",
        element: <NotFound />,
        errorElement: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LayoutProvider>
        <RouterProvider router={router} />
      </LayoutProvider>
    </ThemeProvider>
  </React.StrictMode>
);

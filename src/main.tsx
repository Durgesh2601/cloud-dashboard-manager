import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Applications from "./pages/Applications.tsx";
import NotFound from "./components/NotFound/index.tsx";
import { LayoutProvider } from "./context/LayoutContext.tsx";
import ErrorBoundary from "./components/ErrorBoundary/index.tsx";
import Fallback from "./components/FallbackComponent/index.tsx";
import AppLayout from "./App.tsx";
import theme from "./theme.ts";
import "./index.css";

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
      <ErrorBoundary fallback={<Fallback />}>
        <LayoutProvider>
          <RouterProvider router={router} />
        </LayoutProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Applications from "./pages/Applications.tsx";
import NotFound from "./components/NotFound/index.tsx";
import AppLayout from "./App.tsx";
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
    <RouterProvider router={router} />
  </React.StrictMode>
);

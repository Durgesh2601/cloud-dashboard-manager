import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import LoadingComponent from "./components/LoadingComponent";

const MainLayout = lazy(() => import("./pages/index"));

const AppLayout = () => (
  <>
    <Suspense fallback={<LoadingComponent />}>
      <MainLayout />
    </Suspense>
    <Outlet />
  </>
);

export default AppLayout;

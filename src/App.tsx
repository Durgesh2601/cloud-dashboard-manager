import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import LoaderScreen from "./components/LoaderScreen";

const MainLayout = lazy(() => import("./pages/index"));

const AppLayout = () => (
  <>
    <Suspense fallback={<LoaderScreen />}>
      <MainLayout />
    </Suspense>
    <Outlet />
  </>
);

export default AppLayout;

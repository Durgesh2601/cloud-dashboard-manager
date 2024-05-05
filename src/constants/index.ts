export const commonGridStyles: { [key: string]: string | number } = {
  border: "1px solid #f8f8f8",
  backgroundColor: "white",
  height: "20vh",
  width: "100%",
  borderRadius: "0.5em",
  boxShadow: 1,
  display: "block",
};

export const commonBoxStyles = {
  border: "1px solid #EBEBEB",
  backgroundColor: "white",
  height: "fit-content",
  borderRadius: "0.5em",
  width: "fit-content",
  minWidth: "30%",
};

export const iconStyle = {
  cursor: "pointer",
};

export const APP_STATUS_MAP: { [key: string]: string } = {
  deployed: "Deployed",
  pending: "Pending",
  failed: "Failed",
  inactive: "Inactive",
  uninstalled: "Uninstalled",
};

export const METRIC_TYPE_KEY_MAP: { [key: string]: string } = {
  CPU: "cpuUtilization",
  Memory: "memoryUtilization",
};

export const API_CALLS_COUNT = 4;
export const DRAWER_WIDTH = 200;

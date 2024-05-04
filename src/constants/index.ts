export const commonGridStyles: { [key: string]: string | number } = {
  border: "1px solid #f8f8f8",
  backgroundColor: "white",
  height: "20vh",
  width: "100%",
  borderRadius: "0.5em",
  boxShadow: 1,
};

export const APP_STATUS_MAP: { [key: string]: string } = {
  deployed: "Deployed",
  pending: "Pending",
  failed: "Failed",
  inactive: "Inactive",
};

export const METRIC_TYPE_KEY_MAP: { [key: string]: string } = {
  CPU: "cpuUtilization",
  Memory: "memoryUtilization",
};

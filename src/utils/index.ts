import { Application, EventType } from "../types";

export const calculateTimeElapsed = (updatedAt: string) => {
  if (!updatedAt) return "Last updated: never";
  const lastUpdatedTime = new Date(parseInt(updatedAt) * 1000); // Convert to milliseconds
  const currentTime = new Date();
  const timeDiff = Math.abs(currentTime.getTime() - lastUpdatedTime.getTime());

  const hours = Math.floor(timeDiff / (1000 * 60 * 60)); // Calculate hours
  const mins = Math.floor((timeDiff / (1000 * 60)) % 60); // Calculate minutes

  if (hours > 24) {
    const days = Math.floor(hours / 24);
    return `Last updated ${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `Last updated ${hours} ${hours === 1 ? "hour" : "hours"}${
      mins > 0 ? ` and ${mins} ${mins === 1 ? "minute" : "minutes"}` : ""
    } ago`;
  } else {
    return `Last updated ${mins} ${mins === 1 ? "minute" : "minutes"} ago`;
  }
};

export const getAppNameById = (applications: Application[], id: number) => {
  return applications.find((app) => app.id === id)?.name || `App ${id}`;
};

export const getChartOptions = (metricType: string) => ({
  title: {
    text: "",
  },
  xAxis: {
    type: "datetime",
  },
  yAxis: {
    title: {
      text: `${metricType} Utilization`,
    },
  },
  series: [
    {
      type: "line",
    },
  ],
});

export const getEnvsFromLocalStorage = () => {
  const storedEnvs = localStorage.getItem("env_vars");
  if (!storedEnvs) return null;
  return JSON.parse(storedEnvs);
};

export const storeEnvsInLocalStorage = (payload: any) => {
  localStorage.setItem("env_vars", JSON.stringify(payload));
};

export const getMappedEnvs = (storedEnvs: Record<string, string>) => {
  return Object.entries(storedEnvs).map(([name, value]) => ({
    name,
    value,
  }));
};

export const getStatusChipColor = (status: EventType["status"]) => {
  switch (status) {
    case "successful":
      return "success";
    case "failed":
      return "error";
    case "in_progress":
      return "info";
    default:
      return "default";
  }
};

export const renderTimeAgo = (timestamp: string) => {
  const diff = Math.floor((Date.now() - Number(timestamp) * 1000) / 1000);
  const minutes = Math.floor(diff / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) {
    return `${days} day(s) ago`;
  } else if (hours > 0) {
    return `${hours} hour(s) ago`;
  } else if (minutes > 0) {
    return `${minutes} minute(s) ago`;
  } else {
    return `Just now`;
  }
};

export const getStatusLabel = (status: string) => {
  switch (status) {
    case "successful":
      return "Successful";
    case "failed":
      return "Failed";
    case "in_progress":
      return "In Progress";
    default:
      return "";
  }
};

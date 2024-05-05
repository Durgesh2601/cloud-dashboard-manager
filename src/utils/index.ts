import { Application } from "../pages/Applications";

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

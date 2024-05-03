import axios, { AxiosResponse } from "axios";

const BASE_URL: string = import.meta.env.VITE_APP_API_URL;

const fetchData = async <T>(apiKey: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(`${BASE_URL}${apiKey}`);
    return response?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getApplications = async () => {
  const API_KEY: string = import.meta.env.VITE_APP_APPLICATIONS_API_KEY;
  return await fetchData<any[]>(API_KEY);
};

export const getAppMemoryUtilization = async () => {
  const API_KEY: string = import.meta.env.VITE_APP_MEMORY_UTILIZATION_API_KEY;
  return await fetchData<any[]>(API_KEY);
};

export const getAppCpuUtilization = async () => {
  const API_KEY: string = import.meta.env.VITE_APP_CPU_UTILIZATION_API_KEY;
  return await fetchData<any[]>(API_KEY);
};

export const getAppEventHistory = async () => {
  const API_KEY: string = import.meta.env.VITE_APP_EVENT_HISTORY_API_KEY;
  return await fetchData<any[]>(API_KEY);
};

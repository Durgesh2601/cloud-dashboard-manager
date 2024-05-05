import { useEffect, useState } from "react";
import {
  getAppCpuUtilization,
  getAppEventHistory,
  getAppMemoryUtilization,
  getApplications,
} from "../api";
import { useLayout } from "../context/LayoutContext";
import { API_CALLS_COUNT } from "../constants";

const useFetchAppData = () => {
  const {
    setApplications,
    setSelectedApp,
    setEventHistory,
    setMemoryUtilization,
    setCpuUtilization,
  } = useLayout();

  const [isLoading, setIsLoading] = useState(true);
  const [completedCalls, setCompletedCalls] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const applicationsData = await getApplications();
        setApplications(applicationsData);
        setSelectedApp(applicationsData[0]);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setCompletedCalls((prev) => prev + 1);
      }
    };

    const fetchEventData = async () => {
      try {
        const eventHistoryData = await getAppEventHistory();
        setEventHistory(eventHistoryData);
      } catch (error) {
        console.error("Error fetching event history:", error);
      } finally {
        setCompletedCalls((prev) => prev + 1);
      }
    };

    const fetchMemoryData = async () => {
      try {
        const memoryUtilizationData = await getAppMemoryUtilization();
        setMemoryUtilization(memoryUtilizationData);
      } catch (error) {
        console.error("Error fetching memory utilization:", error);
      } finally {
        setCompletedCalls((prev) => prev + 1);
      }
    };

    const fetchCpuData = async () => {
      try {
        const cpuUtilizationData = await getAppCpuUtilization();
        setCpuUtilization(cpuUtilizationData);
      } catch (error) {
        console.error("Error fetching CPU utilization:", error);
      } finally {
        setCompletedCalls((prev) => prev + 1);
      }
    };

    fetchData();
    fetchEventData();
    fetchMemoryData();
    fetchCpuData();
  }, []);

  useEffect(() => {
    if (completedCalls === API_CALLS_COUNT) {
      setIsLoading(false);
    }
  }, [completedCalls]);

  return { isLoading };
};

export default useFetchAppData;

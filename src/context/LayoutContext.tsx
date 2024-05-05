import { createContext, useContext, useState } from "react";
import {
  Application,
  CpuUtilization,
  EventHistory,
  LayoutContextType,
  MemoryUtilization,
} from "../types";

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined
);

export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [eventHistory, setEventHistory] = useState<EventHistory[]>([]);
  const [memoryUtilization, setMemoryUtilization] = useState<
    MemoryUtilization[]
  >([]);
  const [cpuUtilization, setCpuUtilization] = useState<CpuUtilization[]>([]);

  const value: LayoutContextType = {
    applications,
    setApplications,
    isDrawerOpen,
    setIsDrawerOpen,
    selectedApp,
    setSelectedApp,
    eventHistory,
    setEventHistory,
    memoryUtilization,
    setMemoryUtilization,
    cpuUtilization,
    setCpuUtilization,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

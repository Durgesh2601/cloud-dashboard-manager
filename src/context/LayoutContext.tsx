import { createContext, useContext, useState } from "react";
import { Application } from "../pages/Applications";

interface MemoryUtilization {
  id: number;
  timestamp: string;
  applicationId: string;
  memoryUtilization: string;
}

interface CpuUtilization {
  id: number;
  timestamp: string;
  applicationId: string;
  cpuUtilization: string;
}

interface EventHistory {
  id: number;
  event: string;
  status: string;
  version: string;
  timestamp: string;
  applicationId: string;
}

interface LayoutContextType {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedApp: Application | null;
  setSelectedApp: React.Dispatch<React.SetStateAction<Application | null>>;
  eventHistory: EventHistory[];
  setEventHistory: React.Dispatch<React.SetStateAction<EventHistory[]>>;
  memoryUtilization: MemoryUtilization[];
  setMemoryUtilization: React.Dispatch<
    React.SetStateAction<MemoryUtilization[]>
  >;
  cpuUtilization: CpuUtilization[];
  setCpuUtilization: React.Dispatch<React.SetStateAction<CpuUtilization[]>>;
  applications: Application[];
  setApplications: React.Dispatch<React.SetStateAction<Application[]>>;
}

export const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

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

import { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

interface Application {
  id: number;
  name: string;
  status: string;
  version: string | null;
  updatedAt: string;
  desiredVersion: string;
}

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

interface RenderGridHeaderProps {
  title: string;
}

interface TopBarProps {
  applications: Application[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface TabItem {
  label: string;
  key: string;
  content: string;
  icon: JSX.Element;
}

interface TabItemMap {
  [key: string]: JSX.Element;
}

interface MetricDataType {
  [applicationId: string]: {
    name: string;
    data: Array<[number, number]>;
  };
}

interface EventType {
  id: number;
  event: string;
  status: "successful" | "failed" | "in_progress";
  version: string;
  timestamp: string;
  applicationId: string;
}

interface EnvVar {
  name: string;
  value: string;
}

export type {
  ErrorBoundaryProps,
  ErrorBoundaryState,
  Application,
  MemoryUtilization,
  CpuUtilization,
  EventHistory,
  LayoutContextType,
  RenderGridHeaderProps,
  TopBarProps,
  TabPanelProps,
  TabItem,
  TabItemMap,
  MetricDataType,
  EventType,
  EnvVar,
};

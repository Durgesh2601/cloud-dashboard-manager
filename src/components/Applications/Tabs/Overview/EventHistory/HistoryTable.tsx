import React, { useState } from "react";
import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";

export type EventType = {
  id: number;
  event: string;
  status: "successful" | "failed" | "in_progress";
  version: string;
  timestamp: string;
  applicationId: string;
};

const getStatusChipColor = (status: EventType["status"]) => {
  switch (status) {
    case "successful":
      return "primary";
    case "failed":
      return "error";
    case "in_progress":
      return "warning";
    default:
      return "default";
  }
};

const renderTimeAgo = (timestamp: string) => {
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

const EventsHistoryTable: React.FC<{ data: EventType[] }> = ({ data = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? data : data.slice(0, 5);

  const handleToggleShowAll = (e: React.MouseEvent) => {
    e?.preventDefault();
    setShowAll(!showAll);
  };

  return (
    <Box pl={2} pt={3}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width="35%">Event</TableCell>
              <TableCell width="32%">Version</TableCell>
              <TableCell width="32%">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              maxHeight: "68vh",
              overflow: "auto",
            }}
          >
            {displayData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Typography>{row.event}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {renderTimeAgo(row.timestamp)}
                  </Typography>
                </TableCell>
                <TableCell>{row.version}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={getStatusChipColor(row.status)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={4} pl={1}>
        <a href="#" onClick={handleToggleShowAll}>
          View {showAll ? "less" : "all"}
        </a>
      </Box>
    </Box>
  );
};

export default EventsHistoryTable;

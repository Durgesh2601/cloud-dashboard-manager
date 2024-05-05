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
} from "@mui/material";
import { EventType } from "../../../../../types";
import { getStatusChipColor, getStatusLabel, renderTimeAgo } from "../../../../../utils";

const EventsHistoryTable: React.FC<{ data: EventType[] }> = ({ data = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? data : data.slice(0, 5);

  const handleToggleShowAll = (e: React.MouseEvent) => {
    e?.preventDefault();
    setShowAll(!showAll);
  };

  return (
    <Box pl={2} pt={1.5}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell width="35%">
                <Typography variant="body1" fontWeight="bold">
                  Event
                </Typography>
              </TableCell>
              <TableCell width="32%">
                <Typography variant="body1" fontWeight="bold">
                  Version
                </Typography>
              </TableCell>
              <TableCell width="32%">
                <Typography variant="body1" fontWeight="bold">
                  Status
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
                    label={getStatusLabel(row.status)}
                    color={getStatusChipColor(row.status)}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={4} pl={1}>
        <a href="#" onClick={handleToggleShowAll}>
          View {showAll ? "less" : "more"}
        </a>
      </Box>
    </Box>
  );
};

export default EventsHistoryTable;

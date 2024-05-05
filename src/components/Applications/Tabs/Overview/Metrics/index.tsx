import { useEffect, useRef, useState } from "react";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { RenderGridHeader } from "../../../../HelperComponents";
import { commonGridStyles } from "../../../../../constants";
import { useLayout } from "../../../../../context/LayoutContext";
import { getAppNameById, getChartOptions } from "../../../../../utils";

type AccType = {
  [applicationId: string]: {
    name: string;
    data: Array<[number, number]>;
  };
};

const SystemMetrics = () => {
  const [metricType, setMetricType] = useState<"CPU" | "Memory">("CPU");
  const [chartOptions, setChartOptions] = useState<any>(getChartOptions("CPU"));
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const { cpuUtilization, memoryUtilization, applications } = useLayout();

  useEffect(() => {
    const metricData =
      metricType === "CPU" ? cpuUtilization : memoryUtilization;
    if (!metricData?.length) return;
    const newChartOptions = getChartOptions(metricType);
    const seriesData = metricData?.reduce((acc: AccType, currentValue) => {
      if (!acc[currentValue.applicationId]) {
        acc[currentValue.applicationId] = {
          name: getAppNameById(
            applications,
            Number(currentValue.applicationId)
          ),
          data: [],
        };
      }
      let metricValue: string;
      if (metricType === "CPU" && "cpuUtilization" in currentValue) {
        metricValue = currentValue.cpuUtilization;
      } else if (
        metricType === "Memory" &&
        "memoryUtilization" in currentValue
      ) {
        metricValue = currentValue.memoryUtilization;
      } else {
        // Handle the case where the metricType doesn't match the structure of currentValue
        // You can throw an error, log a message, or handle it according to your requirement
        return acc;
      }
      acc[currentValue.applicationId].data.push([
        Number(currentValue.timestamp) * 1000,
        Number(metricValue),
      ]);
      return acc;
    }, {} as AccType);
    setChartOptions({
      ...newChartOptions,
      series: Object.values(seriesData),
    });
  }, [metricType]);

  const handleTabChange = (e: React.SyntheticEvent, newValue: string) => {
    console.log(e);
    setMetricType(newValue as "CPU" | "Memory");
  };

  return (
    <Grid
      item
      sx={{
        ...commonGridStyles,
        width: "49.5%",
        height: "fit-content",
      }}
      p={2}
    >
      <RenderGridHeader title={"System metrics"} />
      <Box mt={2} pr={1} mb={3}>
        <Tabs
          value={metricType}
          onChange={(e, newValue) => handleTabChange(e, newValue)}
        >
          <Tab
            label="CPU"
            value="CPU"
            sx={{
              width: "50%",
            }}
          />
          <Tab
            label="Memory"
            value="Memory"
            sx={{
              width: "50%",
            }}
          />
        </Tabs>
      </Box>
      <Box>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          ref={chartComponentRef}
        />
      </Box>
    </Grid>
  );
};

export default SystemMetrics;

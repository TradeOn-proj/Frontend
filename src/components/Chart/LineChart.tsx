import { ResponsiveLine } from "@nivo/line";

type LinePoint = {
  x: string;
  y: number;
};

type LineSeries = {
  id: string;
  data: LinePoint[];
};

interface LineChartProps {
  data: LineSeries[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 30, right: 60, bottom: 25, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 0,
        max: 5,
        stacked: false,
        reverse: false,
      }}
      axisBottom={{
        legendOffset: 36,
        tickRotation: 0,
      }}
      axisLeft={{
        legendOffset: -40,
        tickValues: [0, 1, 2, 3, 4, 5],
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "seriesColor" }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      enableArea={true}
      colors={{ scheme: "category10" }}
    />
  );
};

export default LineChart;

import { ResponsiveBar } from "@nivo/bar";

type BarData = {
  month: string;
  trade: number;
};

interface MyBarProps {
  data: BarData[];
}

const BarChart: React.FC<MyBarProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((d) => d.trade));
  const tickStep = 5;
  const tickValues = Array.from(
    { length: Math.ceil(maxValue / tickStep) + 1 },
    (_, i) => i * tickStep
  );

  return (
    <ResponsiveBar
      data={data}
      keys={["trade"]}
      indexBy="month"
      layout="vertical"
      colors={() => "#3E83E9"}
      labelSkipWidth={12}
      labelSkipHeight={12}
      // legends={[
      //   {
      //     dataFrom: "keys",
      //     anchor: "bottom-right",
      //     direction: "column",
      //     translateX: 120,
      //     itemsSpacing: 3,
      //     itemWidth: 100,
      //     itemHeight: 16,
      //   },
      // ]}
      axisBottom={{
        // legend: "월별",
        legendOffset: 32,
        tickRotation: 0,
      }}
      axisLeft={{
        // legend: "거래 횟수",
        legendOffset: -40,
        tickValues: tickValues,
      }}
      gridYValues={tickValues}
      margin={{ top: 50, bottom: 50, left: 40 }}
      padding={0.3}
      enableLabel={false}
    />
  );
};

export default BarChart;

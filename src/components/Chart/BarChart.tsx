import { ResponsiveBar } from "@nivo/bar";

type BarData = {
  month: string;
  trade: number;
};

interface MyBarProps {
  data?: BarData[];
}

const BarChart: React.FC<MyBarProps> = ({ data }) => {
  const validData = (data ?? []).filter(
    (d): d is BarData => typeof d.trade === "number" && !isNaN(d.trade)
  );

  if (validData.length === 0) {
    return <div>표시할 거래 데이터가 없습니다.</div>;
  }

  const maxValue = Math.max(...validData.map((d) => d.trade), 0);
  const tickStep = 5;
  const tickValues = Array.from(
    { length: Math.ceil(maxValue / tickStep) + 1 },
    (_, i) => i * tickStep
  );

  return (
    <ResponsiveBar
      data={validData}
      keys={["trade"]}
      indexBy="month"
      layout="vertical"
      colors={() => "#3E83E9"}
      labelSkipWidth={12}
      labelSkipHeight={12}
      axisBottom={{
        legendOffset: 32,
        tickRotation: 0,
      }}
      axisLeft={{
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

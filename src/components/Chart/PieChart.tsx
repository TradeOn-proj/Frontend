import { ResponsivePie } from "@nivo/pie";

type PieData = {
  id: string;
  value: number;
  color?: string;
};

interface PieProps {
  data: PieData[];
}

const PieChart: React.FC<PieProps> = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.6}
    cornerRadius={2}
    activeOuterRadiusOffset={8}
    // arcLinkLabelsSkipAngle={10}
    // arcLinkLabelsTextColor="#333333"
    // arcLinkLabelsThickness={2}
    // arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
    // legends={[
    //   {
    //     anchor: "bottom",
    //     direction: "row",
    //     translateY: 56,
    //     itemWidth: 100,
    //     itemHeight: 18,
    //     symbolShape: "circle",
    //   },
    // ]}
  />
);

export default PieChart;

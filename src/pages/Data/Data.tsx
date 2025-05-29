import { BarChart, DataCard, LineChart, PieChart } from "@components/index";
import {
  chartContainer,
  container,
  dataContainer,
  barBox,
  pieBox,
  mainContainer,
  titleStyle,
  lineBox,
} from "./Data.style";

const Data: React.FC = () => {
  const dummyData = [
    { month: "1월", trade: 12 },
    { month: "2월", trade: 19 },
    { month: "3월", trade: 23 },
    { month: "4월", trade: 18 },
    { month: "5월", trade: 20 },
    { month: "6월", trade: 15 },
    { month: "7월", trade: 30 },
    { month: "8월", trade: 25 },
    { month: "9월", trade: 28 },
    { month: "10월", trade: 22 },
    { month: "11월", trade: 26 },
    { month: "12월", trade: 33 },
  ];

  const piedata = [
    { id: "거래완료", value: 70 },
    { id: "대기중 ", value: 30 },
  ];

  const ratingData = [
    {
      id: "평점",
      data: [
        { x: "1월", y: 3.5 },
        { x: "2월", y: 4.0 },
        { x: "3월", y: 4.5 },
        { x: "4월", y: 4.0 },
        { x: "5월", y: 4.2 },
        { x: "6월", y: 3.9 },
        { x: "7월", y: 4.8 },
        { x: "8월", y: 4.5 },
        { x: "9월", y: 4.3 },
        { x: "10월", y: 3.8 },
        { x: "11월", y: 4.0 },
        { x: "12월", y: 4.6 },
      ],
    },
  ];

  return (
    <div css={mainContainer}>
      <p css={titleStyle}>거래 데이터 분석</p>
      <div css={container}>
        <DataCard />
        <DataCard />
        <DataCard />
      </div>
      <div css={dataContainer}>
        <p>월별 거래 횟수</p>
        <div css={chartContainer}>
          <div css={barBox}>
            <BarChart data={dummyData} css={barBox} />
          </div>
          <div css={pieBox}>
            <PieChart data={piedata} />
          </div>
        </div>
      </div>
      <div css={dataContainer}>
        평점 변화
        <div css={lineBox}>
          <LineChart data={ratingData} />
        </div>
      </div>
    </div>
  );
};

export default Data;

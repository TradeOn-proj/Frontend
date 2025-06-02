import useGetUserAnalytics from "apis/hooks/analytics/useGetUserAnalytics";
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
  const userId = Number(localStorage.getItem("userId"));

  const { data, isLoading, error } = useGetUserAnalytics(userId);

  if (isLoading) return <div>로딩 중...</div>;
  if (error || !data) return <div>에러가 발생했습니다.</div>;

  const barData = data.monthlyTradeCounts.map((item) => ({
    month: `${parseInt(item.month.split("-")[1])}월`,
    trade: item.count,
  }));

  const pieData = [
    { id: "거래완료", value: data.successRate },
    { id: "대기중", value: 100 - data.successRate },
  ];

  const validLinePoints = data.monthlyAverageRatings
    .filter(
      (item) => item.month?.includes("-") && !isNaN(Number(item.averageRating))
    )
    .map((item) => {
      const parts = item.month.split("-");
      const monthNum = parts[1] ? parseInt(parts[1]) : NaN;
      return {
        x: !isNaN(monthNum) ? `${monthNum}월` : "기타",
        y: Number(item.averageRating),
      };
    });

  const lineData = validLinePoints.length
    ? [{ id: "평점", data: validLinePoints }]
    : [];

  return (
    <div css={mainContainer}>
      <p css={titleStyle}>거래 데이터 분석</p>
      <div css={container}>
        <DataCard title="총 거래 수" value={data.totalTrades} />
        <DataCard title="성공 거래 수" value={data.successfulTrades} />
        <DataCard title="평균 평점" value={data.averageRating.toFixed(1)} />
      </div>
      <div css={dataContainer}>
        <p>월별 거래 횟수</p>
        <div css={chartContainer}>
          <div css={barBox}>
            <BarChart data={barData} />
          </div>
          <div css={pieBox}>
            <PieChart data={pieData} />
          </div>
        </div>
      </div>
      <div css={dataContainer}>
        평점 변화
        <div css={lineBox}>
          <LineChart data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default Data;

import { Fire } from "@assets/index";
import {
  container,
  fireIconStyle,
  temperatureBarContainer,
  temperatureBase,
  temperatureRange,
  titleContainer,
  titleStyle,
  valueContainer,
  valueStyle,
} from "./TemperatureBar.style";

interface TemperatureProps {
  points?: number;
}

const gradeThresholds = [
  { min: 3000, label: "교환장인" },
  { min: 2000, label: "장사꾼" },
  { min: 1000, label: "초보상인" },
  { min: 0, label: "보따리장수" },
];

const getGradeInfo = (points: number) => {
  const current = gradeThresholds.find((g) => points >= g.min)!;
  const currentIndex = gradeThresholds.findIndex(
    (g) => g.label === current.label
  );
  const next = gradeThresholds[currentIndex - 1];

  const baseMin = current.min;
  const nextMin = next?.min ?? baseMin + 1000;
  const percent = Math.min(
    100,
    ((points - baseMin) / (nextMin - baseMin)) * 100
  );

  return {
    currentGrade: current.label,
    nextGrade: next?.label ?? "최고등급",
    percentage: percent,
  };
};

const TemperatureBar: React.FC<TemperatureProps> = ({ points }) => {
  const fallbackPoints = Number(localStorage.getItem("userPoints")) || 0;
  const actualPoints = points !== undefined ? points : fallbackPoints;

  const { currentGrade, nextGrade, percentage } = getGradeInfo(actualPoints);
  return (
    <div css={container}>
      <div css={titleContainer}>
        <p css={titleStyle}>{currentGrade}</p>
      </div>
      <div css={temperatureBarContainer}>
        <div css={temperatureBase}>
          <div css={temperatureRange(percentage)} />
        </div>
      </div>
      <div css={valueContainer}>
        <p css={valueStyle}>{nextGrade}</p>
        <Fire css={fireIconStyle} />
      </div>
    </div>
  );
};

export default TemperatureBar;

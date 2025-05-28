import { Fire } from "@assets/index";
import {
  container,
  fireIconStyle,
  //   fireIconStyle,
  temperatureBarContainer,
  temperatureBase,
  temperatureRange,
  titleContainer,
  titleStyle,
  valueContainer,
  valueStyle,
} from "./TemperatureBar.style";

interface TemperatureProps {
  temperature: number;
}

const TemperatureBar: React.FC<TemperatureProps> = ({ temperature }) => {
  return (
    <>
      <div css={container}>
        <div css={titleContainer}>
          <p css={titleStyle}>초보상인</p>
        </div>
        <div css={temperatureBarContainer}>
          <div css={temperatureBase}>
            <div css={temperatureRange(temperature)} />
          </div>
        </div>
        <div css={valueContainer}>
          <p css={valueStyle}>마켓러</p>
          <Fire css={fireIconStyle} />
        </div>
      </div>
    </>
  );
};

export default TemperatureBar;

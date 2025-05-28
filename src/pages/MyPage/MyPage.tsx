import { Left, ProfileImg, SettingIcon } from "@assets/index";
import {
  container,
  content,
  iconStyle,
  imageStyle,
  leftStyle,
  mainContainer,
  profileContainer,
  profileContent,
  selectBox,
  selectContainer,
  textStyle,
  titleStyle,
  tradingContainer,
} from "./MyPage.style";
import { TemperatureBar, TradingCard } from "@components/index";
import { useNavigate } from "react-router-dom";

const MyPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSetting = () => {
    navigate(`/setting`);
  };
  return (
    <div css={mainContainer}>
      <div css={profileContainer}>
        <img src={ProfileImg} css={imageStyle} />
        <div css={profileContent}>
          <div css={titleStyle}>
            <p>이구역거래왕</p>
            <SettingIcon css={iconStyle} onClick={handleSetting} />
          </div>
          <p css={textStyle}>우리 거래해요~</p>
          <TemperatureBar temperature={30} />
        </div>
      </div>
      <div css={selectContainer}>
        <div css={selectBox}>
          보유포인트
          <div css={content}>
            <Left css={leftStyle} />
            1,200
          </div>
        </div>
        <div css={selectBox}>
          거래내역
          <div css={content}>
            <Left css={leftStyle} />5
          </div>
        </div>
        <div css={selectBox}>
          거래 데이터 분석
          <div css={content}>
            <Left css={leftStyle} />
            new
          </div>
        </div>
      </div>
      <div css={container}>
        <p>진행중인 거래</p>
        <div css={tradingContainer}>
          <TradingCard />
          <TradingCard />
          <TradingCard />
          <TradingCard />
          <TradingCard />
        </div>
      </div>
    </div>
  );
};

export default MyPage;

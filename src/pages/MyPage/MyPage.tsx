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
  smalltitleStyle,
  textStyle,
  titleStyle,
  tradingContainer,
} from "./MyPage.style";
import { DataButton, TemperatureBar, TradingCard } from "@components/index";
import { useNavigate } from "react-router-dom";
import useUserProfile from "apis/hooks/user/userUserProfile";

const MyPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSetting = () => {
    navigate(`/setting`);
  };

  const userId = Number(localStorage.getItem("userId"));

  const { data: profile, isLoading, error } = useUserProfile(userId);

  if (!userId || isNaN(userId)) {
    return <div>로그인 정보가 없습니다.</div>;
  }

  if (isLoading) return <div>로딩 중...</div>;
  if (error || !profile) return <div>프로필 정보를 불러오지 못했습니다.</div>;
  return (
    <div css={mainContainer}>
      <div css={profileContainer}>
        <img src={ProfileImg} css={imageStyle} />
        <div css={profileContent}>
          <div css={titleStyle}>
            <p>{profile.username}</p>
            <div css={smalltitleStyle}>
              <DataButton />
              <SettingIcon css={iconStyle} onClick={handleSetting} />
            </div>
          </div>
          <p css={textStyle}>{profile.email}</p>
          <TemperatureBar points={profile.current_points} />
        </div>
      </div>
      <div css={selectContainer}>
        <div css={selectBox}>
          보유포인트
          <div css={content}>
            <Left css={leftStyle} />
            {profile.current_points}
          </div>
        </div>
        <div css={selectBox}>
          거래내역
          <div css={content}>
            <Left css={leftStyle} />
            {profile.total_trades}
          </div>
        </div>
        <div css={selectBox}>
          리뷰
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

import { ProfileImg } from "@assets/index";
import {
  container,
  imageStyle,
  mainContainer,
  profileContainer,
  profileContent,
  titleStyle,
  tradingContainer,
} from "./OthersPage.style";
import { TemperatureBar, TradingCard } from "@components/index";
import { useParams } from "react-router-dom";
import useUserProfile from "apis/hooks/user/userUserProfile";

const OthersPage: React.FC = () => {
  const { userId } = useParams();
  const parsedUserId = Number(userId);

  const { data: profile, isLoading, error } = useUserProfile(parsedUserId);

  if (!userId || isNaN(parsedUserId)) {
    return <div>잘못된 사용자 ID입니다.</div>;
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
          </div>
          <TemperatureBar points={profile.current_points} />
        </div>
      </div>
      <div css={container}>
        <p>후기</p>
        <div css={tradingContainer}></div>
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

export default OthersPage;

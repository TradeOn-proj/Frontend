import { ProfileImg } from "@assets/index";
import { container, imageStyle } from "./Profile.style";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();

  const handleMyPage = () => {
    navigate("/mypage");
  };
  return (
    <div css={container}>
      <img src={ProfileImg} css={imageStyle} onClick={handleMyPage} />
    </div>
  );
};

export default Profile;

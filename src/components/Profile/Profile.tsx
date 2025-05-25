import { ProfileImg } from "@assets/index";
import { container, imageStyle } from "./Profile.style";

const Profile: React.FC = () => {
  return (
    <div css={container}>
      <img src={ProfileImg} css={imageStyle} />
    </div>
  );
};

export default Profile;

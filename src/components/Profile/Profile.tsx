import { ProfileImg } from "@assets/index";
import { container, imageStyle } from "./Profile.style";

interface ProfileProps {
  onClick?: () => void;
}
const Profile: React.FC<ProfileProps> = ({ onClick }) => {
  return (
    <div css={container}>
      <img src={ProfileImg} css={imageStyle} onClick={onClick} />
    </div>
  );
};

export default Profile;

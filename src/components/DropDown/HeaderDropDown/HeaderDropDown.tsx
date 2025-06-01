import { Link } from "react-router-dom";
import routes from "@constants/routes";
import { containerStyle, dropdownStyle } from "./HeaderDropDown.style";
interface ProfileDropdownProps {
  onClose: () => void;
}
const HeaderDropdown: React.FC<ProfileDropdownProps> = ({ onClose }) => {
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");

    onClose();

    window.location.href = routes.main;
  };

  return (
    <div css={dropdownStyle}>
      <Link to={routes.mypage} css={containerStyle(true)}>
        마이페이지
      </Link>
      <div onClick={handleLogout} css={containerStyle(false)}>
        로그아웃
      </div>
    </div>
  );
};

export default HeaderDropdown;

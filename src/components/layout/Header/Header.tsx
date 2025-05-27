import { container, iconStyle, logoStyle, mainContainer } from "./Header.style";
import { Logo, SearchIcon } from "@assets/index";
import Profile from "@components/Profile/Profile";
import routes from "@constants/routes";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(routes.search);
  };

  const handleHome = () => {
    navigate(routes.home);
  };

  return (
    <div css={mainContainer}>
      <Logo css={logoStyle} onClick={handleHome} />
      <div css={container}>
        <SearchIcon type="button" css={iconStyle} onClick={handleSearch} />
        <Profile />
      </div>
    </div>
  );
};

export default Header;

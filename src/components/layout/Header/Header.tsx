import HeaderButton from "@components/Button/HeaderButton/HeaderButton";
import { container, iconStyle, logoStyle, mainContainer } from "./Header.style";
import { Logo, SearchIcon } from "@assets/index";
import Profile from "@components/Profile/Profile";
import routes from "@constants/routes";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderDropdown from "@components/DropDown/HeaderDropDown/HeaderDropDown";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("accessToken"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleSearch = () => {
    navigate(routes.search);
  };

  const handleHome = () => {
    navigate(routes.home);
  };

  const handleMenuClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div css={mainContainer} ref={ref}>
      <Logo css={logoStyle} onClick={handleHome} />
      {isLoggedIn ? (
        <div css={container}>
          <SearchIcon type="button" css={iconStyle} onClick={handleSearch} />
          <Profile onClick={handleMenuClick} />
        </div>
      ) : (
        <div css={container}>
          <HeaderButton text={"로그인/회원가입"} />
        </div>
      )}
      {isDropdownOpen && (
        <HeaderDropdown onClose={() => setIsDropdownOpen(false)} />
      )}
    </div>
  );
};

export default Header;

import { container, logoStyle } from "./Header.style";
import { Logo } from "@assets/index";
import Profile from "@components/Profile/Profile";

const header = () => {
  return (
    <div css={container}>
      <Logo css={logoStyle} />
      <Profile />
    </div>
  );
};

export default header;

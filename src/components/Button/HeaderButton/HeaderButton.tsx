import { useNavigate } from "react-router-dom";
import { buttonStyle } from "./Header.style";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const HeaderButton: React.FC<ButtonProps> = ({ text, className, disabled }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <button
      css={buttonStyle}
      onClick={handleLogin}
      className={className}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default HeaderButton;

import { container } from "./LoginButton.style";

interface LoginButtonProps {
  mode: "login" | "signin";
  children: React.ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({ mode, children }) => {
  return <button css={container(mode)}>{children}</button>;
};

export default LoginButton;

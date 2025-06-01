import { container } from "./LoginButton.style";

interface LoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode: "login" | "signin";
  children: React.ReactNode;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  mode,
  children,
  ...props
}) => {
  return (
    <button css={container(mode)} {...props}>
      {children}
    </button>
  );
};

export default LoginButton;

import { container, inputStyle } from "./LoginTextField.style";

interface LoginTextFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
}

const LoginTextField = ({
  value,
  onChange,
  placeholder,
  type = "text",
}: LoginTextFieldProps) => {
  return (
    <div css={container}>
      <input
        css={inputStyle}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default LoginTextField;

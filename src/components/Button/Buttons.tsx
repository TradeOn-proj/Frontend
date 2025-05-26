import {baseStyle, filledStyle, outlinedStyle} from "./Buttons.style";

type ButtonProps = {
  text: string;
  type?: "filled" | "outlined";
  onClick?: () => void;
};

const Buttons = ({ text, type = "filled", onClick }: ButtonProps) => {
  return (
    <button
      css={[baseStyle, type === "filled" ? filledStyle : outlinedStyle]}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Buttons;
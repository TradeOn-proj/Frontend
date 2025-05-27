import { container } from "./KeyWord.style";

interface KeyWordProps {
  text: string;
  onRemove?: () => void;
}

const KeyWord: React.FC<KeyWordProps> = ({ text, onRemove }) => {
  return (
    <div css={container}>
      #{text}
      {onRemove && (
        <button
          onClick={onRemove}
          css={{
            marginLeft: "8px",
            cursor: "pointer",
            background: "none",
            border: "none",
            color: "white",
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default KeyWord;

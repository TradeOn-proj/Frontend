import { container, titleStyle } from "./DataCard.style";

const DataCard: React.FC = () => {
  return (
    <div css={container}>
      <p css={titleStyle}>총 거래 수</p>
      12건
    </div>
  );
};

export default DataCard;

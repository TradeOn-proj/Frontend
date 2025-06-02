import { container, titleStyle } from "./DataCard.style";

interface DataCardProps {
  title: string;
  value: string | number;
}

const DataCard: React.FC<DataCardProps> = ({ title, value }) => {
  return (
    <div css={container}>
      <p css={titleStyle}>{title}</p>
      {value}
    </div>
  );
};

export default DataCard;

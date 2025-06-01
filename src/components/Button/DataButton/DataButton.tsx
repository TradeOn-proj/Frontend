import { useNavigate } from "react-router-dom";
import { mainContainer } from "./DataButton.style";
import routes from "@constants/routes";

const DataButton: React.FC = () => {
  const navigate = useNavigate();

  const handleData = () => {
    navigate(routes.data);
  };
  return (
    <div css={mainContainer} onClick={handleData}>
      거래 데이터 보기
    </div>
  );
};

export default DataButton;

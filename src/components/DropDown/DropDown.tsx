import {
  dropdownDeleteItemStyle,
  dropdownDividerStyle,
  dropdownItemStyle,
  dropdownMenuStyle,
} from "./DropDown.style";

interface DropDownProps {
  onEdit: () => void;
  onDelete: () => void;
}

const DropDown: React.FC<DropDownProps> = ({ onEdit, onDelete }) => {
  return (
    <div css={dropdownMenuStyle}>
      <div css={dropdownItemStyle} onClick={onEdit}>
        수정하기
      </div>
      <div css={dropdownDividerStyle}></div>
      <div css={dropdownDeleteItemStyle} onClick={onDelete}>
        삭제하기
      </div>
    </div>
  );
};

export default DropDown;

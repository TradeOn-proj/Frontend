import { Product, Vector } from "@assets/index";
import {
  container,
  content,
  dropdownWrapper,
  imageStyle,
  information,
  keyWordContainer,
  subTitle,
  title,
  titleContainer,
} from "./TradingCard.style";
import KeyWord from "@components/Badge/KeyWord/KeyWord";
import { useEffect, useRef, useState } from "react";
import DropDown from "@components/DropDown/DropDown";

const TradingCard: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleEdit = () => {
    console.log("수정하기 클릭됨");
    setIsDropdownOpen(false);
  };

  const handleDelete = () => {
    console.log("삭제하기 클릭됨");
    setIsDropdownOpen(false);
  };

  return (
    <div css={container}>
      <div css={content}>
        <img src={Product} css={imageStyle} />
        <div css={information}>
          <div css={titleContainer}>
            <div css={title}>
              아이더 바람막이 자켓
              <div onClick={handleToggleDropdown} ref={dropdownRef}>
                <Vector />
              </div>
              {isDropdownOpen && (
                <div css={dropdownWrapper}>
                  <DropDown onEdit={handleEdit} onDelete={handleDelete} />
                </div>
              )}
            </div>
            <p css={subTitle}>#남성의류 #바람막이</p>
          </div>
          <div css={keyWordContainer}>
            <KeyWord text={"#바람막이"} />
            <KeyWord text={"#바람막이"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingCard;

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
import type { userProfileTrade } from "apis/types/user";

interface TradingCardProps {
  trade: userProfileTrade;
}

const TradingCard: React.FC<TradingCardProps> = ({ trade }) => {
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
        <img src={trade.thumbnail_image_url || Product} css={imageStyle} />
        <div css={information}>
          <div css={titleContainer}>
            <div css={title}>
              {trade.title}
              <div onClick={handleToggleDropdown} ref={dropdownRef}>
                <Vector />
              </div>
              {isDropdownOpen && (
                <div css={dropdownWrapper}>
                  <DropDown onEdit={handleEdit} onDelete={handleDelete} />
                </div>
              )}
            </div>
            <p css={subTitle}>#{trade.category}</p>
          </div>
          <div css={keyWordContainer}>
            {trade.usercategories.slice(0, 3).map((keyword, index) => (
              <KeyWord key={index} text={`${keyword}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingCard;

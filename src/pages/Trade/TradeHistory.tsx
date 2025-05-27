import { useState } from "react";
import {container, title, line, tabBar, tab, activeTab,cardWrapper} from "./TradeHistory.style"
import {TradeCard} from "@components/index";

const TradeHistory=()=>{
     const [activeTabIndex, setActiveTabIndex] = useState(0);
     const tabs = ["판매 내역", "구매 내역"];
     const salesData = [
    { id: 1, name: "아이더 자켓", tags: ["#남성의류", "#바람막이"], status: "거래완료", button: "받은 후기 보기" },
  ];

     const purchaseData = [
    { id: 2, name: "애플 마우스", tags: ["#전자기기", "#마우스"], status: "거래완료", button: "후기 작성하기" },
  ];
    const activeData = activeTabIndex === 0 ? salesData : purchaseData;
    return(
        <div css={container}>
            <div css={title}>나의 거래내역</div>
            <div css={line} />
             <div css={tabBar}>
        {tabs.map((tabText, index) => (
          <span
            key={index}
            css={index === activeTabIndex ? activeTab : tab}
            onClick={() => setActiveTabIndex(index)}
          >
            {tabText}
          </span>
        ))}
      </div>
      <div css={cardWrapper}>
         {activeData.map((item) => (
          <TradeCard key={item.id} item={item} />
        ))}
      </div>
        </div>
    )
}
export default TradeHistory;
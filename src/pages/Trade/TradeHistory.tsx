import { useState, useEffect } from "react";
import {container, title, line, tabBar, tab, activeTab,cardWrapper} from "./TradeHistory.style"
import {TradeCard} from "@components/index";
import axios from "axios";

const TradeHistory=()=>{
     const [activeTabIndex, setActiveTabIndex] = useState(0);
      const [salesData, setSalesData] = useState([]);    // 판매 내역
  const [purchaseData, setPurchaseData] = useState([]); // 구매 내역
     const tabs = ["판매 내역", "구매 내역"];
    const userId = Number(localStorage.getItem("userId"));

   useEffect(() => {
    const fetchTradeHistory = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get(`/api/v1/users/${userId}/trades`, {
          headers: {
            Authorization: `Bearer ${token}`,
             "Content-Type": "application/json",
     "ngrok-skip-browser-warning": "true",
          },
          baseURL: import.meta.env.VITE_BASE_URL,
        });

        console.log("📦 거래 내역 응답:", res.data); // 여기를 꼭 확인하세요

    const trades = Array.isArray(res.data) ? res.data : res.data.data; // 안전하게 처리
    const sales = trades.filter((trade) => trade.role === "seller");
    const purchases = trades.filter((trade) => trade.role === "buyer")
        setSalesData(sales);
        setPurchaseData(purchases);
      } catch (err) {
        console.error("❌ 거래 내역 불러오기 실패:", err);
      }
    };

    fetchTradeHistory();
  }, []);
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
        {activeData.length > 0 ? (
          activeData.map((item: any) => (
            <TradeCard
              key={item.tradeId}
              item={{
                id: item.tradeId,
                name: item.postTitle,
                tags: [`#${item.role}`], // 실제로는 백엔드에서 태그가 없으므로 대체 필요
                status: item.status === "COMPLETED" ? "거래완료" : "대기중",
                button:
                  item.status === "COMPLETED"
                    ? item.role === "seller"
                      ? "받은 후기 보기"
                      : "후기 작성하기"
                    : "진행 중",
                   image: item.thumbnail_image_url,   
              }}
            />
          ))
        ) : (
          <div>거래 내역이 없습니다.</div>
        )}
      </div>
    </div>
  );
};
export default TradeHistory;
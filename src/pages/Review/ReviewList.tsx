import { useEffect, useState } from "react";
import axios from "axios";
import {
  container, title, line, reviewCard, profileImage, userInfo,
  userName, commentText, ratingBox, starIcon
} from "./ReviewList.style";
import { ProfileImg } from "@assets/index";

type Review = {
  review_id: number;
  reviewer_id: number;
  rating: number;
  comment: string;
  date: string;
};

const ReviewList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const userId = 9; // 🔒 고정된 사용자 ID (또는 useParams 등으로 대체 가능)
const dummyReviews: Review[] = [
  {
    review_id: 1,
    reviewer_id: 101,
    rating: 4.6,
    comment: "정말 친절한 거래였습니다. 다음에도 거래하고 싶어요!",
    date: "2025-06-01",
  },
  {
    review_id: 2,
    reviewer_id: 102,
    rating: 4.0,
    comment: "시간 약속도 잘 지키시고 물건 상태도 좋았습니다.",
    date: "2025-05-28",
  },
  {
    review_id: 3,
    reviewer_id: 103,
    rating: 5.0,
    comment: "응답이 빠르고 매우 만족스러운 거래였습니다.",
    date: "2025-05-25",
  },

  {
    review_id: 5,
    reviewer_id: 105,
    rating: 4.8,
    comment: "정말 빠르게 처리해주셔서 감사했습니다. 포장도 꼼꼼했고 물건도 아주 만족스럽습니다. 추천드려요!",
    date: "2025-05-18",
  },
  {
    review_id: 6,
    reviewer_id: 106,
    rating: 4.2,
    comment: "판매자분의 응답이 빠르고, 직거래도 원활하게 진행되었습니다. 거래 위치도 유동적으로 맞춰주셔서 감사했어요.",
    date: "2025-05-15",
  },
];
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const token = localStorage.getItem("accessToken");
  //       const res = await axios.get(`/api/v1/users/${userId}/reviews`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //         baseURL: import.meta.env.VITE_BASE_URL,
  //       });

  //       setReviews(res.data.reviews || []);
  //     } catch (err) {
  //       console.error("❌ 리뷰 불러오기 실패:", err);
  //     }
  //   };

  //   fetchReviews();
  // }, []);

  return (
    <div css={container}>
      <div css={title}>후기</div>
      <div css={line} />
{dummyReviews.map((r) => (
        <div key={r.review_id} css={reviewCard}>
          <img src={ProfileImg} alt="프로필" css={profileImage} />
          <div css={userInfo}>
            <div css={userName}>사용자{r.reviewer_id}</div>
            <div css={commentText}>{r.comment}</div>
          </div>
          <div css={ratingBox}>
            <span css={starIcon}>★</span> {r.rating.toFixed(1)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
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

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get(`/api/v1/users/${userId}/reviews`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          baseURL: import.meta.env.VITE_BASE_URL,
        });

        setReviews(res.data.reviews || []);
      } catch (err) {
        console.error("❌ 리뷰 불러오기 실패:", err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div css={container}>
      <div css={title}>후기</div>
      <div css={line} />
      {reviews.length > 0 ? (
        reviews.map((r) => (
          <div key={r.review_id} css={reviewCard}>
            <img src={ProfileImg} alt="프로필" css={profileImage} />
            <div css={userInfo}>
              <div css={userName}>사용자</div>
              <div css={commentText}>{r.comment}</div>
            </div>
            <div css={ratingBox}>
              <span css={starIcon}>★</span> {r.rating.toFixed(1)}
            </div>
          </div>
        ))
      ) : (
        <div>아직 등록된 후기가 없습니다.</div>
      )}
    </div>
  );
};

export default ReviewList;

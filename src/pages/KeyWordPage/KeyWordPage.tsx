import { SearchInput, KeyWord } from "@components/index";
import { useEffect, useState } from "react";
import {
  btnContainer,
  keyWordContainer,
  mainContainer,
  searchStyle,
  textBox,
  textContainer,
  textStyle,
  titleStyle,
} from "./KeyWordPage.style";
import usePatchUserCategories from "apis/hooks/user/usePatchUserCategories";
import useGetUserCategories from "apis/hooks/user/useGetCategories";
import { useNavigate } from "react-router-dom";

const KeyWordPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [originalKeywords, setOriginalKeywords] = useState<string[]>([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const userId = Number(localStorage.getItem("userId"));
  const { mutate } = usePatchUserCategories(userId);
  const { data: serverKeywords, isSuccess } = useGetUserCategories(userId);

  useEffect(() => {
    if (isSuccess && serverKeywords) {
      setKeywords(serverKeywords);
      setOriginalKeywords(serverKeywords);
    }
  }, [isSuccess, serverKeywords]);

  const handleQueryChange = (value: string) => {
    if (value.trim().length > 15) {
      setError("키워드는 15자 이내로 입력해주세요.");
    } else {
      setError("");
    }

    setQuery(value);
  };

  const handleSearch = () => {
    const trimmed = query.trim();

    if (keywords.length >= 5) {
      setError("키워드는 최대 5개까지 등록할 수 있어요.");
      return;
    }

    if (trimmed.length > 15) return;

    setError("");

    if (trimmed && !keywords.includes(trimmed)) {
      setKeywords((prev) => [...prev, trimmed]);
    }

    setQuery("");
  };

  const handleRemove = (keywordToRemove: string) => {
    setKeywords((prev) => prev.filter((k) => k !== keywordToRemove));
  };

  const handleClick = () => {
    mutate(
      { categories: keywords },
      {
        onSuccess: () => {
          window.scrollTo(0, 0);
          navigate("/");
        },
        onError: () => {
          alert("저장에 실패했습니다.");
        },
      }
    );
  };

  return (
    <div css={mainContainer}>
      <div css={textContainer}>
        <p css={titleStyle}>요즘 내가 찾는 물건은?</p>
        <p>
          입력한 키워드를 바탕으로 맞춤 아이템을 추천해드려요. 최대 5개까지 등록
          가능해요.
        </p>
      </div>
      <div css={textBox}>
        <div css={searchStyle}>
          <SearchInput
            query={query}
            setQuery={handleQueryChange}
            onSearch={handleSearch}
            placeholder={"키워드를 입력하세요"}
            disabled={!!error || query.trim().length === 0}
          />
          <div css={btnContainer} onClick={handleClick}>
            저장하기
          </div>
        </div>
        {error && <div css={textStyle}>{error}</div>}
      </div>
      <div css={keyWordContainer}>
        {keywords.map((keyword) => (
          <KeyWord
            key={keyword}
            text={keyword}
            onRemove={() => handleRemove(keyword)}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyWordPage;

import { SearchInput, KeyWord } from "@components/index";
import { useEffect, useState } from "react";
import {
  keyWordContainer,
  mainContainer,
  textBox,
  textContainer,
  textStyle,
  titleStyle,
} from "./KeyWordPage.style";

const KeyWordPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("keywords");
    if (stored) {
      setKeywords(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

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

    if (keywords.length >= 20) {
      return;
    }
    if (trimmed.length > 15) {
      return;
    }

    setError("");

    if (trimmed && !keywords.includes(trimmed)) {
      setKeywords((prev) => [...prev, trimmed]);
    }
    setQuery("");
  };

  const handleRemove = (keywordToRemove: string) => {
    setKeywords((prev) => prev.filter((k) => k !== keywordToRemove));
  };

  return (
    <div css={mainContainer}>
      <div css={textContainer}>
        <p css={titleStyle}>요즘 내가 찾는 물건은?</p>
        <p>
          입력한 키워드를 바탕으로 맞춤 아이템을 추천해드려요. 최대 20개까지
          등록 가능해요.{" "}
        </p>
      </div>
      <div css={textBox}>
        <SearchInput
          query={query}
          setQuery={handleQueryChange}
          onSearch={handleSearch}
          placeholder={"키워드를 입력하세요"}
          disabled={!!error || query.trim().length === 0}
        />
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

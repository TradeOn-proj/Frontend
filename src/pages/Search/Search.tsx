import { SearchInput } from "@components/index";
import { container, mainContainer } from "./Search.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");

  const handleSearch = () => {
    if (query) {
      navigate(`/search-result?query=${query}`);
    }
  };

  return (
    <div css={mainContainer}>
      <div css={container}>
        <p>찾고 싶은 제품이 있으신가요?</p>
        <SearchInput
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          placeholder={"무엇이든 검색해 보세요"}
        />
      </div>
    </div>
  );
};

export default Search;

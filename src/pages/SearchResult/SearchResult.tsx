import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  mainContainer,
  pointStyle,
  productContent,
  textContainer,
} from "./SearchResult.style";
import { Card, LoadingSpinner, SearchInput } from "@components/index";
import useGetSearch from "apis/hooks/search/useGetSearch";

const SearchResult: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  useEffect(() => {
    const updatedQuery =
      new URLSearchParams(location.search).get("query") || "";
    setQuery(updatedQuery);
  }, [location]);

  const handleSearch = () => {
    if (query) {
      navigate(`/search-result?query=${encodeURIComponent(query)}`);
    }
  };

  const { data, isLoading, error } = useGetSearch(query || initialQuery);

  const posts = data?.posts || [];

  return (
    <div css={mainContainer}>
      <SearchInput
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        placeholder={"무엇이든 검색해 보세요"}
      />
      <div css={textContainer}>
        <span css={pointStyle}>‘{query}’</span>에 대한 총
        <span css={pointStyle}>{data?.count || 0}</span>
        개의 피드와 팟 검색 결과가 발견되었어요.
      </div>
      <div css={productContent}>
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div>에러가 발생했습니다.</div>
        ) : posts.length > 0 ? (
          posts.map((post) => <Card key={post.id} post={post} />)
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;

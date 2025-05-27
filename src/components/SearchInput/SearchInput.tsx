import { InputSearchIcon } from "@assets/index";
import {
  buttonStyle,
  iconStyle,
  inputStyle,
  searchInputStyle,
} from "./SearchInput.style";

interface SearchInputProps {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
  placeholder: string;
  disabled?: boolean;
}

const SearchInput = ({
  query,
  setQuery,
  onSearch,
  placeholder,
  disabled,
}: SearchInputProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!disabled) {
      onSearch();
    }
  };
  return (
    <form onSubmit={handleSubmit} css={searchInputStyle}>
      <input
        css={inputStyle}
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="button"
        css={buttonStyle}
        onClick={onSearch}
        disabled={disabled}
      >
        <InputSearchIcon css={iconStyle} />
      </button>
    </form>
  );
};

export default SearchInput;

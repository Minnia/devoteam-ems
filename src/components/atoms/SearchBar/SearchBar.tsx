import { FC, useEffect, useRef, useState } from "react";
import * as S from "./styled";

type Props = {
  searchText: string;
  setSearchText: (text: string) => void;
};

const Search: FC<Props> = ({ searchText, setSearchText }) => {
  const targetRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.value = "";
    }
  }, [showSearchInput]);

  return (
    <S.Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}
    >
      <S.SearchInput
        $showSearchInput={showSearchInput}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {showSearchInput ? "" : <S.IconMagnifyingGlass />}
    </S.Container>
  );
};

export default Search;

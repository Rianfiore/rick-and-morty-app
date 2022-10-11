import { useState } from "react";
import { ISearchBar } from "./types";
import * as S from "./styles";
import Image from "next/image";

export const SearchBar = ({
  onSearch = () => {},
  onChange = () => {},
}: ISearchBar) => {
  const [input, setInput] = useState<string>("");
  return (
    <S.SearchBar>
      <div className="search-bar">
        <input
          className="search-bar__input"
          placeholder="Search here"
          onChange={(e) => {
            onChange(e);
            setInput(e.target.value);
          }}
        />
        <button
          className="search-bar__button"
          type="button"
          onClick={() => onSearch(input)}
        >
          <Image src="/images/search-icon.png" alt="" width={20} height={20} />
        </button>
      </div>
    </S.SearchBar>
  );
};

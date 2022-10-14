import { ISearchBar } from "./types";
import * as S from "./styles";
import Image from "next/image";
import { useField } from "utils/hooks/useField";
import { useRecoilValue } from "recoil";
import { themeState } from "recoil/theme/atom";
import { useHover } from "utils/hooks";
import { ChangeEvent } from "react";

export const SearchBar = ({
  onSearch = () => {},
  onChange = () => {},
}: ISearchBar) => {
  const { reset, ...inputField } = useField("text");
  const isDarkTheme = useRecoilValue(themeState);

  const clearSearch = () => {
    reset();
    onSearch("");
  };

  const changePlaceholder = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    inputField.onChange(e);
  };

  return (
    <S.SearchBar>
      <div data-testid="search-bar" className="search-bar">
        <input
          {...inputField}
          className={`search-bar__input ${
            inputField.value.length > 0 ? "search-bar__input--clear-icon" : ""
          }`}
          placeholder="Search here"
          onChange={(e) => changePlaceholder(e)}
        />
        {inputField.value.length > 0 && (
          <button
            className="search-bar__button search-bar__button__first"
            type="button"
            onClick={() => clearSearch()}
          >
            <div className="search-bar__button__image">
              <Image src="/images/close.png" alt="" width={20} height={20} />
            </div>
          </button>
        )}
        <button
          className={`search-bar__button ${
            isDarkTheme ? "search-bar__button--inverse" : ""
          }`}
          type="button"
          onClick={() => onSearch(inputField.value)}
        >
          <div className="search-bar__button__image">
            <Image
              src={`/images/search-icon.png`}
              alt=""
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>
    </S.SearchBar>
  );
};

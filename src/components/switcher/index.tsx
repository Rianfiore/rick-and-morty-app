import { useRecoilState, useRecoilValue } from "recoil";
import { themeState } from "recoil/theme/atom";
import * as S from "./styles";
import Image from "next/image";

export const Switcher = () => {
  const [, setTheme] = useRecoilState(themeState);
  const isDarkTheme = useRecoilValue(themeState);

  return (
    <S.Switcher>
      <div className="switcher">
        <input
          type="checkbox"
          className="switcher__checkbox"
          onChange={() => {
            setTheme(!isDarkTheme)

            localStorage.setItem('isDarkTheme', (!isDarkTheme).toString())
          }}
        />
        <div className="switcher__icon-one">
          <Image src="/images/light.png" alt="" width={18} height={18} />
        </div>
        <div className="switcher__icon-two">
          <Image src="/images/dark.png" alt="" width={18} height={18} />
        </div>
        <div
          className={`switcher__circle ${
            isDarkTheme
              ? "switcher__circle--enabled"
              : "switcher__circle--disabled"
          }`}
        ></div>
      </div>
    </S.Switcher>
  );
};

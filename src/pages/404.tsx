import * as S from "styles/404";

import Image from "next/image";

export default function Custom404() {
  return (
    <S.Custom404>
      <div className="not-found__image">
        <Image src="/images/404.png" alt="" width={800} height={700} />
      </div>
    </S.Custom404>
  );
}

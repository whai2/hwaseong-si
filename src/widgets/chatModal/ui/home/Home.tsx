import QuickTaps from "./QuickTaps";

import Logo from "@shared/assets/logo.png";

import { QuickTapList } from "./constants/quickTapList";

import styled from "@emotion/styled";

function Home() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo src={Logo} alt="logo" />
        <S.HeaderTitle>
          안녕하세요! AI 챗봇이예요.
          <br />
          무엇을 도와드릴까요?
        </S.HeaderTitle>
      </S.Header>

      {QuickTapList.map((item) => (
        <QuickTaps key={item.title} quickTap={item} />
      ))}
    </S.Container>
  );
}

export default Home;

const S = {
  Container: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex-shrink: 0;
  `,

  Header: styled.div`
    display: flex;
    width: 297px;
    height: 48px;
    align-items: flex-start;
    gap: 24px;
  `,

  Logo: styled.img`
    width: 54px;
    height: 54px;
  `,

  HeaderTitle: styled.span`
    padding-top: 3px;
    color: var(--Semantic-Color-Fill-fill-primary, #171b1f);

    /* HEADING/h6 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
  `,
};

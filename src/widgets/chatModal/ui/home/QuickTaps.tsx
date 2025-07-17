import { QuickTapList } from "./constants/quickTapList";

import styled from "@emotion/styled";

function QuickTaps({ quickTap }: { quickTap: (typeof QuickTapList)[0] }) {
  const { title, items, icon } = quickTap;

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Icon as={icon} />
        <S.Title>{title}</S.Title>
      </S.TitleContainer>
      {items.map((item) => (
        <S.Item key={item.text}>
          <S.Text>{item.text}</S.Text>
        </S.Item>
      ))}
    </S.Container>
  );
}

export default QuickTaps;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
  `,

  Item: styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #e7e8e9;
      border-radius: 8px;
    }
  `,

  TitleContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
  `,

  Title: styled.span`
    color: #ff5200;

    /* TEXT/subtitle-5 */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 150% */
    padding-top: 2px;
  `,

  Text: styled.span`
    color: var(--Semantic-Color-Fill-fill-primary, #171b1f);

    /* TEXT/body-3 */
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  `,

  Icon: styled.svg`
    width: 20px;
    height: 20px;
    color: #ff5200;
  `,
};

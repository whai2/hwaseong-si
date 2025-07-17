import styled from "@emotion/styled";

function InnerButton({
  button,
}: {
  button: { title: string; url: string; description: string };
}) {
  return (
    <S.Container onClick={() => window.open(button.url, "_blank")}>
      <S.ButtonText>{button.title}</S.ButtonText>
    </S.Container>
  );
}

export default InnerButton;

const S = {
  Container: styled.div`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;

    border-radius: 8px;
    border: 1px solid var(--Neutral1, #d1d9e2);
    background: var(--Background-BG1, #fff);

    cursor: pointer;

    &:hover {
      background: var(--Background-BG2, #f5f5f5);
    }
  `,

  ButtonText: styled.span`
    color: var(--Black, #000);

    /* TEXT/body-3 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  `,
};

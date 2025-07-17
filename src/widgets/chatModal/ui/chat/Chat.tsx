import InnerButton from "./InnerButton";

import { useChat } from "@features/chat";
import { useControlScroll } from "./hooks/useControlScroll";

import styled from "@emotion/styled";
import logo from "@shared/assets/logo.png";

function Chat() {
  const { session } = useChat();

  const { containerRef } = useControlScroll({ data: session });

  return (
    <S.Container ref={containerRef}>
      {session.map((item) => (
        <S.MessagePosition $isChatbot={item.type === "assistant"}>
          {item.type === "assistant" && <S.Logo src={logo} alt="logo" />}
          <S.MessageContainer $isChatbot={item.type === "assistant"}>
            <S.Text $isChatbot={item.type === "assistant"}>
              {item.message}
            </S.Text>
            {item.button && <InnerButton button={item.button} />}
          </S.MessageContainer>
        </S.MessagePosition>
      ))}
    </S.Container>
  );
}

export default Chat;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 0;
    align-self: stretch;
    overflow-y: auto;
    height: 100%;
  `,

  MessagePosition: styled.div<{ $isChatbot: boolean }>`
    display: flex;
    width: 100%;
    padding-bottom: 20px;
    justify-content: ${(props) =>
      props.$isChatbot ? "flex-start" : "flex-end"};
  `,

  MessageContainer: styled.div<{ $isChatbot: boolean }>`
    display: flex;
    flex-direction: column;
    padding: 8px 12px;
    align-self: flex-end;
    gap: 10px;
    border-radius: ${(props) =>
      props.$isChatbot ? "4px 12px 12px 12px" : "12px 4px 12px 12px"};
    background: ${({ $isChatbot }) => ($isChatbot ? "#FFF" : "#FF5200")};
    max-width: ${(props) => (props.$isChatbot ? "250px" : "270px")};
  `,

  Text: styled.span<{ $isChatbot: boolean }>`
    color: ${({ $isChatbot }) => ($isChatbot ? "#090909" : "#FFF")};
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    white-space: normal;
    word-break: break-word;
    // overflow-wrap: break-word;
  `,

  Logo: styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
  `,

  ObserverDiv: styled.div`
    margin: 0;
    padding: 0;
    height: 0;
  `,
};

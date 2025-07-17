import { useState } from "react";

import { useHandleInputSize } from "./hooks/useHandleInputSize";

import styled from "@emotion/styled";
import { ReactComponent as SendIcon } from "./assets/send.svg";

function BottomInput() {
  const [text, setText] = useState("");
  const { textareaRef } = useHandleInputSize(text);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();

      if (text.trim() !== "") {
        console.log(text);
      }
    }
  };

  // useEffect(() => {
  //   if (isOpen && textareaRef.current) {
  //     setTimeout(() => {
  //       textareaRef.current?.focus();
  //     }, 0);
  //   }
  // }, [isOpen]);

  return (
    <S.Container>
      <S.ChatInputContainer>
        <S.ChatTextArea
          placeholder="메시지를 입력해주세요."
          ref={textareaRef}
          value={text}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <S.SendButton>
          <S.AnswerStylesBox>
            <S.Text
              $isTextInput={true}
              $disabled={false}
              $isAnswerStylesOpen={false}
            ></S.Text>
          </S.AnswerStylesBox>
          <S.SendIcon $isTextInput={true} $disabled={false} />
        </S.SendButton>
      </S.ChatInputContainer>
    </S.Container>
  );
}

export default BottomInput;

const S = {
  Container: styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0px 15px 15px 15px;
    align-items: center;
    align-self: stretch;
    z-index: 20;
    width: 100%;
  `,

  ChatInputContainer: styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 8px;
    background: #fff;
    width: 100%;
    padding-left: 15px;
  `,

  ChatTextArea: styled.textarea`
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: var(--Grays-Black, var(--Grays-Black, #000));

    justify-content: center;
    align-items: center;

    width: 100%;
    border: none;
    outline: none;
    resize: none;

    background: transparent;

    min-height: 43px;
    height: auto;
    max-height: 200px;
    transition: height 0.2s ease;

    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

    &:focus {
      outline: none;
    }
  `,

  BottomInput: styled.input`
    display: flex;
    width: 100%;
    padding: 22px 15px;
    align-items: center;
    gap: 8.599px;
    border-radius: 0px 0px 10.752px 10.752px;
    background: #f5f5f5;
  `,

  SendButton: styled.div`
    width: 100%;
    height: 22px;
    background: transparent;
    border: none;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  SendIcon: styled(SendIcon)<{ $isTextInput: boolean; $disabled?: boolean }>`
    width: 23px;
    height: 22px;
    color: ${({ $isTextInput, $disabled }) =>
      $disabled ? "gray" : $isTextInput ? "#FF5200" : "gray"};
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};

    flex-shrink: 0;
    cursor: pointer;
  `,

  AnswerStylesBox: styled.div<{ $disabled?: boolean }>`
    display: flex;
    align-items: center;
    gap: 2px;
    cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
    opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  `,

  Text: styled.span<{
    $isTextInput: boolean;
    $disabled?: boolean;
    $isAnswerStylesOpen: boolean;
  }>`
    color: ${({ $isTextInput, $disabled, $isAnswerStylesOpen }) =>
      $disabled
        ? "#97999B"
        : $isTextInput || $isAnswerStylesOpen
        ? "#4969F0"
        : "#97999B"};
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    padding-top: 3px;
    text-align: center;
  `,
};

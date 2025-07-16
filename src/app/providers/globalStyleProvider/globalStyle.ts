import { css } from "@emotion/react";
import reset from "emotion-reset";
import theme from "./theme";

const globalStyle = css`
  ${reset}

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${theme.color.basic};
    max-width: 100%;
    min-height: calc(var(--vh, 1vh) * 100);
    overflow-x: hidden;
    text-underline-position: under;
  }

  div,
  span {
    font-family: "Pretendard Variable", Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
      "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  strong {
    font-weight: 700;
  }

  button {
    padding: 0;
    border: none;
    cursor: pointer;
    background: transparent;
  }

  ol {
    list-style-type: decimal;
    margin-block-start: 10px;
    margin-block-end: 10px;
    padding-inline-start: 25px;
    unicode-bidi: isolate;
  }

  ul {
    list-style-type: disc;
    margin-block-start: 10px;
    margin-block-end: 10px;
    padding-inline-start: 25px;
    unicode-bidi: isolate;
  }

  img,
  input {
    outline: none;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  textarea {
    outline: none;
    resize: none;
  }

  br {
    margin: 0;
    line-height: 0;
  }

  //스크롤바 없애는 이유: 스크롤바가 생겼다가 없어졌다 할 때 레이아웃이 흔들림
  * {
    -ms-overflow-style: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  [disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }

  p {
    margin: 0;
    padding: 0;
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
`;

export default globalStyle;

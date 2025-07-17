import { useState } from "react";

import Chat from "./chat/Chat";
import Home from "./home/Home";
import Layout from "./layout/Layout";

import { ROUTES, useNavigate } from "@entities/navigate";

import ChatIcon from "@shared/assets/logo.png";

import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

function ChatModal() {
  const { currentPage } = useNavigate();

  const [visible, setVisible] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  const handleClick = () => {
    setIsFirst(false);
    setVisible(!visible);
  };

  return (
    <>
      <S.Modal visible={visible} isFirst={isFirst}>
        <Layout>
          {currentPage === ROUTES.HOME && <Home />}
          {currentPage === ROUTES.CHAT && <Chat />}
        </Layout>
      </S.Modal>
      <S.FloatingButton onClick={handleClick}>
        <S.Logo src={ChatIcon} alt="chat" />
      </S.FloatingButton>
    </>
  );
}

export default ChatModal;

const S = {
  Modal: styled.div<{ visible: boolean; isFirst: boolean }>`
    position: fixed;
    top: 25px;
    right: 30px;
    width: 340px;
    height: calc(100vh - 116px);
    overflow: hidden;
    border-radius: 16px;
    background-color: #f5f5f5;
    z-index: 1000000000 !important;
    box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 2px 0px inset,
      rgba(0, 0, 0, 0.05) 0px 0px 2px 1px, rgba(0, 0, 0, 0.3) 0px 12px 60px;

    ${({ isFirst, visible }) =>
      isFirst
        ? css`
            animation: none;
          `
        : visible
        ? css`
            animation: ${fadeUp} 0.4s ease forwards;
          `
        : css`
            animation: ${fadeDown} 0.4s ease forwards;
          `};

    pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
    opacity: 0;
  `,

  FloatingButton: styled.div`
    position: fixed;
    bottom: 25px;
    right: 30px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: #d9d9d9;
    z-index: 1000000001 !important;
    cursor: pointer;
  `,

  Logo: styled.img`
    width: 100%;
    height: 100%;
  `,
};

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(30px);
  }
`;

import BottomInput from "./BottomInput";
import TopBar from "./TopBar";

import styled from "@emotion/styled";

function Layout({
  children,
  setVisible,
}: {
  children: React.ReactNode;
  setVisible: (visible: boolean) => void;
}) {
  return (
    <S.Layout>
      <TopBar setVisible={setVisible} />
      <S.Body>{children}</S.Body>
      <BottomInput />
    </S.Layout>
  );
}

export default Layout;

const S = {
  Layout: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // padding: 10px;
    gap: 10px;
  `,

  Body: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow-y: auto;
    padding: 20px;
  `,
};

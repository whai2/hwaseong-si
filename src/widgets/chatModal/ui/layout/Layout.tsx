import TopBar from "./TopBar";
import BottomInput from "./BottomInput";

import styled from "@emotion/styled";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <S.Layout>
      <TopBar />
      {children}
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
    padding: 10px;
    gap: 10px;
  `,
};

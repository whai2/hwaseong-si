import { ROUTES, useNavigate } from "@entities/navigate";

import { ReactComponent as ArrowBackIcon } from "./assets/arrowBack.svg";
// import { ReactComponent as HistoryIcon } from "./assets/history.svg";
import { ReactComponent as NewChatIcon } from "./assets/newChat.svg";

import styled from "@emotion/styled";

function TopBar() {
  const { setCurrentPage } = useNavigate();

  return (
    <S.Container>
      <S.Icon as={ArrowBackIcon} />
      <S.NavigationContainer>
        <S.Icon as={NewChatIcon} onClick={() => setCurrentPage(ROUTES.HOME)} />
        {/* <S.Icon as={HistoryIcon} /> */}
      </S.NavigationContainer>
    </S.Container>
  );
}

export default TopBar;

const S = {
  Container: styled.div`
    display: flex;
    width: 100%;
    padding: 14px 10px;
    justify-content: space-between;
    align-items: center;
  `,

  NavigationContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding-right: 10px;
  `,

  Icon: styled.svg`
    width: 20px;
    height: 20px;
    cursor: pointer;

    color: #5f6d7e;

    &:hover {
      color: #000;
    }
  `,
};

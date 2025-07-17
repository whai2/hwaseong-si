import { ROUTES, useNavigate } from "@entities/navigate";

import { ReactComponent as ArrowBackIcon } from "./assets/arrowBack.svg";
import { ReactComponent as CloseIcon } from "./assets/close.svg";
// import { ReactComponent as HistoryIcon } from "./assets/history.svg";
import { ReactComponent as NewChatIcon } from "./assets/newChat.svg";

import styled from "@emotion/styled";

function TopBar({ setVisible }: { setVisible: (visible: boolean) => void }) {
  const { setCurrentPage, currentPage } = useNavigate();

  return (
    <S.Container>
      {currentPage === ROUTES.CHAT ? (
        <S.Icon
          as={ArrowBackIcon}
          onClick={() => setCurrentPage(ROUTES.HOME)}
        />
      ) : (
        <S.CloseIcon onClick={() => setVisible(false)} />
      )}
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

  CloseIcon: styled(CloseIcon)`
    width: 13px;
    height: 13px;
    cursor: pointer;
    margin-left: 7px;
    color: #5f6d7e;

    &:hover {
      color: #000;
    }
  `,
};

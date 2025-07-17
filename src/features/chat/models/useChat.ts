import { useChatStore } from "@entities/chat";
import { ROUTES, useNavigate } from "@entities/navigate";

export const useChat = () => {
  const { session, startSSEStream } = useChatStore();
  const { setCurrentPage } = useNavigate();

  const handleStartSSEStream = (userMessage: string) => {
    startSSEStream(userMessage);
    setCurrentPage(ROUTES.CHAT);
  };

  return {
    session,
    handleStartSSEStream,
  };
};

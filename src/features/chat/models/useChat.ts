import { useMemo } from "react";

import { useChatStore } from "@entities/chat";
import { ROUTES, useNavigate } from "@entities/navigate";

export const useChat = () => {
  const { session, startSSEStream, isLoading } = useChatStore();
  const { setCurrentPage } = useNavigate();

  const title = useMemo(() => {
    return session[0]?.message;
  }, [session]);

  const handleStartSSEStream = (userMessage: string) => {
    startSSEStream(userMessage);
    setCurrentPage(ROUTES.CHAT);
  };

  return {
    session,
    isLoading,
    title,
    handleStartSSEStream,
  };
};

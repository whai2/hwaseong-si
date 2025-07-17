import { useChatStore } from "@entities/chat";

export const useChat = () => {
  const { session, startSSEStream } = useChatStore();

  const handleStartSSEStream = (userMessage: string) => {
    startSSEStream(userMessage);
  };

  return {
    session,
    handleStartSSEStream,
  };
};

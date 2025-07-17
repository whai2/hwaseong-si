import { useMutation } from "@tanstack/react-query";

// layer
import { chatStreamApi } from "@entities/chat/apis/chat.api";

export const useChatQuery = () => {
  return useMutation({
    mutationFn: (message: string) => chatStreamApi(message),
  });
};
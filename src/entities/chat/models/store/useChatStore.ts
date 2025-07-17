import { create } from "zustand";

import { chatStreamApi } from "@entities/chat/apis/chat.api";

export interface ChatType {
  type: "user" | "assistant";
  message: string;
}

interface ChatStore {
  session: ChatType[];
  setCurrentChat: (chat: ChatType) => void;
  updateWithStream: (message: string) => void;
  startSSEStream: (userMessage: string) => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  session: [],

  setCurrentChat: (chat: ChatType) =>
    set((state) => ({
      session: [...state.session, chat],
    })),

  updateWithStream: (message: string) => {
    const session = get().session;
    const lastMessage = session[session.length - 1];

    if (!lastMessage || lastMessage.type !== "assistant") {
      set((state) => ({
        session: [...state.session, { type: "assistant", message }],
      }));
    } else {
      const updatedSession = [...session];
      updatedSession[updatedSession.length - 1] = {
        ...lastMessage,
        message: lastMessage.message + message,
      };
      set({ session: updatedSession });
    }
  },

  // SSE 스트림 시작 함수 추가
  startSSEStream: async (userMessage: string) => {
    // 1. user 메시지 먼저 추가
    get().setCurrentChat({ type: "user", message: userMessage });

    const decoder = new TextDecoder();
    const accumulated = { text: "" };

    // 2. SSE 스트림 받기 (예: EventSource 또는 fetch+stream)
    const reader = await chatStreamApi(userMessage);

    while (true) {
      const { done, value } = await reader.read();
      if (done) return;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split("\n");

      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = JSON.parse(line.slice(6));

          if (data.role === "assistant") {
            accumulated.text += data.content;
            get().updateWithStream(data.content);
          }
        }
      }
    }
  },
}));

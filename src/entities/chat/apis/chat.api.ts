import { apiClient, streamHeaders } from "@shared/apis";

export const chatStreamApi = async (message: string) => {
  const response = await apiClient().post(
    "/chat_stream",
    {
      text: message,
    },
    {
      headers: streamHeaders,
    }
  );

  if (!response.ok) throw new Error("Failed to fetch");

  const reader = response.body?.getReader();
  if (!reader) throw new Error("No reader available");

  return reader;
};

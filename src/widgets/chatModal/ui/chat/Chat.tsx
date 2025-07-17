import { useChat } from "@features/chat";

function Chat() {
  const { session } = useChat();

  return <div>{session.map((item) => item.message)}</div>;
}

export default Chat;

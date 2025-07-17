import { GlobalStyleProvider, QueryProvider } from "./providers";

import { Background } from "@pages/backgrounds";
import { ChatModal } from "@widgets/chatModal";

function App() {
  return (
    <GlobalStyleProvider>
      <QueryProvider>
        <ChatModal />
      </QueryProvider>

      <Background />
    </GlobalStyleProvider>
  );
}

export default App;

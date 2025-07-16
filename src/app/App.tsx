import { GlobalStyleProvider, QueryProvider } from "./providers";

import { Background } from "@pages/backgrounds";

function App() {
  return (
    <GlobalStyleProvider>
      <QueryProvider>
        <div>hi</div>
      </QueryProvider>

      <Background />
    </GlobalStyleProvider>
  );
}

export default App;

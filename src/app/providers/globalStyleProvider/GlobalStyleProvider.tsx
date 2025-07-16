import { Global, ThemeProvider } from "@emotion/react";

import globalStyle from "./globalStyle";
import theme from "./theme";

function GlobalStyleProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      {children}
    </ThemeProvider>
  );
}

export default GlobalStyleProvider;

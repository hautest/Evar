import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle, theme } from "./style";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import App from "./App";

declare global {
  interface Window {
    naver: any;
    daum: any;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);

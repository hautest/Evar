import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  html * {
    font-family: 'NotoSansCJKkrMedium';
    box-sizing: border-box;
  }
  #root {
    height: 100%;
  }
`;

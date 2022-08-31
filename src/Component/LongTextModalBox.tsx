import styled from "styled-components";
import { flexColumn } from "../style";

export const LongTextModalBox = styled.article`
  padding: ${({ theme: { spacing } }) => spacing[20]};
  background-color: ${({ theme: { colors } }) => colors.white};
  ${flexColumn}
  overflow-y: scroll;
  height: 50vh;
  ::-webkit-scrollbar {
    display: none;
  }
  word-break: break-all;
`;

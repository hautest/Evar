import styled, { css } from "styled-components";
import { flexColumn } from "../style";

export const LongTextModalBox = styled.article`
  ${({ theme: { colors, spacing } }) => css`
    padding: ${spacing[20]};
    background-color: ${colors.white};
    line-height: ${spacing[20]};
  `}
  ${flexColumn}
  overflow-y: scroll;
  height: 50vh;
  ::-webkit-scrollbar {
    display: none;
  }
  word-break: break-all;
`;

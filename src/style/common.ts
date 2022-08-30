import { css } from "styled-components";

export const flex = css`
  display: flex;
`;

export const flexJustCenter = css`
  ${flex}
  justify-content: center;
`;

export const flexJustCenterAlignCenter = css`
  ${flexJustCenter}
  align-items: center;
`;

export const flexColumn = css`
  ${flex}
  flex-direction: column;
`;

export const flexColumnJustCenter = css`
  ${flexColumn}
  justify-content: center;
`;

export const flexColumnJustCenterAlignCenter = css`
  ${flexColumnJustCenter}
  align-items: center;
`;

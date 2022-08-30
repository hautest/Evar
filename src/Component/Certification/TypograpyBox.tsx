import styled, { css } from "styled-components";
import { flex } from "../../style";

export const TypograpyBox = styled.div`
  ${flex}
  justify-content: space-between;
  ${({ theme: { colors, spacing } }) => css`
    border: solid 1px ${colors.gray};
    border-radius: ${spacing[10]};
    padding: ${spacing[12]};
  `}
`;

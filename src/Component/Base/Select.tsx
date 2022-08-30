import styled, { css } from "styled-components";
import { MouseEvent } from "react";

export interface SelectProps {
  value?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const Select = styled.div<SelectProps>`
  ${({ theme: { colors, spacing } }) => css`
    padding: ${spacing[12]};
    background-color: ${colors.white};
    :hover {
      background-color: ${colors.gray};
    }
  `}
  cursor: pointer;
`;

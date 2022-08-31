import { MouseEvent } from "react";
import styled, { css } from "styled-components";

import { ThemeSpacingType } from "../../style";

interface ButtonProps {
  children: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  fontSize?: ThemeSpacingType;
}

export const Button = styled.button<ButtonProps>`
  ${({ theme: { colors, spacing }, fontSize = "16" }) => css`
    background-color: ${colors.primary};
    color: ${colors.white};
    border-radius: ${spacing[4]};
    border: none;
    font-size: ${spacing[fontSize]};
    :disabled {
      background-color: ${colors.gray};
    }
  `}
  width: 100%;
  height: 100%;
  padding: 1px 6px;
  cursor: pointer;
`;

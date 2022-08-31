import styled, { css } from "styled-components";

import { ThemeSpacingType } from "../../style";

const inputState = {
  success: css`
    border-color: ${({ theme: { colors } }) => colors.primary};
  `,
  error: css`
    border-color: ${({ theme: { colors } }) => colors.warn};
  `,
  default: css`
    border-color: ${({ theme: { colors } }) => colors.gray};
  `,
};

const inputBorder = {
  under: css`
    border-width: 0px 0px 1px;
  `,
  all: css`
    border-width: 1px;
  `,
  none: css`
    border-width: 0px;
  `,
};

interface InputProps {
  border?: "under" | "all" | "none";
  fontSize: ThemeSpacingType;
  state?: keyof typeof inputState;
}

export const Input = styled.input<InputProps>`
  ${({
    theme: { colors, spacing },
    border = "none",
    fontSize,
    state = "default",
  }) => css`
    ${inputState[state]}
    color: ${colors.black};
    ${inputBorder[border]}
    font-size: ${spacing[fontSize]};
    border-radius: ${spacing[4]};
    padding: ${spacing[12]};
    :disabled {
      background-color: ${colors.gray};
    }
  `}
  cursor: pointer;
  outline: none;
  width: 100%;
  height: 100%;
`;

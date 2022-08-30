import styled from "styled-components";

import { ThemeColorType, ThemeSpacingType } from "../../style";

interface TypographyProps {
  children: string;
  size: ThemeSpacingType;
  color?: ThemeColorType;
  fontWeight?: 400 | 500;
}

export const Typography = styled.p<TypographyProps>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-style: normal;
  font-stretch: normal;
  margin: 0;
`;

import styled from "styled-components";

import { ThemeColorType, ThemeSpacingType } from "../../style";

interface TypographyProps {
  children: string;
  size: ThemeSpacingType;
  color?: ThemeColorType;
  fontWeight?: 400 | 500 | 700;
}

export const Typography = styled.p<TypographyProps>`
  font-size: ${({ theme: { spacing }, size }) => spacing[size]};
  color: ${({ theme: { colors }, color }) =>
    color ? colors[color] : colors.black};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-style: normal;
  font-stretch: normal;
  margin: 0;
`;

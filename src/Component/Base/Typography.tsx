import styled from "styled-components";

import { ThemeColorType, ThemeSpacingType } from "../../style";

interface TypographyProps {
  children: string;
  size: ThemeSpacingType;
  color?: ThemeColorType;
  fontWeight?: 400 | 500;
}

export function Typography({
  children,
  size,
  color = "black",
  fontWeight = 500,
}: TypographyProps) {
  return (
    <StyleTypography size={size} fontWeight={fontWeight} color={color}>
      {children}
    </StyleTypography>
  );
}

const StyleTypography = styled.p<Omit<TypographyProps, "children">>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-style: normal;
  font-stretch: normal;
  margin: 0;
`;

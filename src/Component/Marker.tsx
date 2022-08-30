import { MouseEvent } from "react";
import styled, { css } from "styled-components";

interface MarkerProps {
  state: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export const Marker = styled.div<MarkerProps>`
  ${({ theme: { colors, spacing }, state }) => css`
    background-color: ${state ? colors.primary : colors.warn};
    padding: ${spacing[8]};
    border-radius: ${spacing[8]};
    color: ${colors.white};
    font-size: ${spacing[14]};
  `}
  cursor: pointer;
  position: absolute;
  z-index: 1;
`;

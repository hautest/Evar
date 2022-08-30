import styled, { css } from "styled-components";
import { flexColumn } from "../style";

export const ModalBackground = styled.div`
  ${flexColumn}
  ${({ theme: { colors, spacing } }) => css`
    background-color: ${colors.white};
    padding: ${spacing[20]};
    box-shadow: ${spacing[4]} ${spacing[4]} ${spacing[4]} ${colors.black};
    gap: ${spacing[8]};
  `}
`;

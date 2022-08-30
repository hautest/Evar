import styled, { css } from "styled-components";

export const Select = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    padding: ${spacing[12]};
    background-color: ${colors.white};
    :hover {
      background-color: ${colors.gray};
    }
  `}
  cursor: pointer;
`;

import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { Typography } from "../Base/Typography";

export function HelpHeader() {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/help");
  };
  return (
    <StlyedHeader onClick={handleClick}>
      <Typography size="18">이전으로</Typography>
    </StlyedHeader>
  );
}

const StlyedHeader = styled.header`
  cursor: pointer;
  border-width: 0px 0px 1px;
  border-style: solid;
  ${({ theme: { spacing, colors } }) => css`
    border-color: ${colors.gray};
    padding: ${spacing[12]};
  `}
`;

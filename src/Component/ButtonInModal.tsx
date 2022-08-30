import { Typography } from "./Base/Typography";
import { MouseEvent } from "react";
import styled from "styled-components";
import { flex } from "../style";

interface ButtonInModalProps {
  leftValue: string;
  rightValue: string;
  leftClick: (e: MouseEvent<HTMLDivElement>) => void;
  rightClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export function ButtonInModal({
  leftValue,
  rightValue,
  leftClick,
  rightClick,
}: ButtonInModalProps) {
  return (
    <StyledButtonInModal>
      <Typography onClick={leftClick} color="primary" size="14">
        {leftValue}
      </Typography>
      <Typography onClick={rightClick} color="primary" size="14">
        {rightValue}
      </Typography>
    </StyledButtonInModal>
  );
}
const StyledButtonInModal = styled.div`
  ${flex}
  justify-content: flex-end;
  gap: ${({ theme: { spacing } }) => spacing[12]};
  cursor: pointer;
`;

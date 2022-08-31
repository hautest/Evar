import { ChangeEvent, MouseEvent } from "react";
import styled from "styled-components";
import { flex } from "../../style";

import { Button } from "../Base/Button";
import { Input } from "../Base/Input";

interface InputAndButtonProps {
  inputValue: string;
  buttonValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  inputState: boolean;
  buttonState: boolean;
  maxLength: number;
  placeholder: string;
}

export function InputAndButton({
  onChange,
  inputValue,
  buttonValue,
  onClick,
  inputState,
  maxLength,
  placeholder,
  buttonState,
}: InputAndButtonProps) {
  return (
    <StyledInputAndButton>
      <Input
        disabled={inputState}
        fontSize="14"
        maxLength={maxLength}
        onChange={onChange}
        border="under"
        placeholder={placeholder}
        value={inputValue}
      />
      <ButtonBox>
        <Button disabled={buttonState} onClick={onClick}>
          {buttonValue}
        </Button>
      </ButtonBox>
    </StyledInputAndButton>
  );
}

const StyledInputAndButton = styled.div`
  ${flex}
  justify-content: space-between;
  height: 3vh;
  gap: ${({ theme: { spacing } }) => spacing[8]};
`;
const ButtonBox = styled.div`
  width: 185px;
`;

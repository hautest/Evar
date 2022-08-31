import { MouseEvent } from "react";
import { Select } from "../Base/Select";
import styled from "styled-components";
import { flexColumn } from "../../style";

interface CarSelectListProps {
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export function CarSelectList({ onClick }: CarSelectListProps) {
  return (
    <SelectBox>
      <Select onClick={onClick}>쏘울 EV</Select>
      <Select onClick={onClick}>니로 EV</Select>
      <Select onClick={onClick}>아이오닉 EV</Select>
      <Select onClick={onClick}>코나 EV</Select>
      <Select onClick={onClick}>볼트 EV</Select>
      <Select onClick={onClick}>테슬라</Select>
      <Select onClick={onClick}>Cancel</Select>
    </SelectBox>
  );
}

const SelectBox = styled.div`
  ${flexColumn}
`;

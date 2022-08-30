import { Modal } from "../Base/Modal";
import styled from "styled-components";
import { Select } from "../Base/Select";
import { Typography } from "../Base/Typography";
import { TypograpyBox } from "./TypograpyBox";
import { flexColumn } from "../../style";
import { useState, MouseEvent } from "react";

export function Charge() {
  const [modal, setModal] = useState(false);
  const [chargeValue, setChargeValue] = useState("");
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      const {
        target: { id },
      } = e;
      setChargeValue(id);
      setModal(false);
    }
  };
  const handleModalOn = () => {
    setModal(true);
  };
  return (
    <div>
      <Typography size="16">충전량</Typography>
      <Typography size="12" color="gray">
        희망 충전량을 선택해주세요
      </Typography>
      <Typography size="12" color="gray">
        현재 20kWh(120km)만 선택 가능합니다
      </Typography>
      <TypograpyBox onClick={handleModalOn}>
        <Typography color="gray" size="14">
          희망 충전량
        </Typography>
        <Typography size="14">{chargeValue}</Typography>
        🔋
      </TypograpyBox>
      <Modal visible={modal}>
        <SelectBox>
          <Select id="20kWh" onClick={handleClick}>
            최대 20kWh (120km)
          </Select>
          <Select onClick={handleClick}>Cancel</Select>
        </SelectBox>
      </Modal>
    </div>
  );
}

const SelectBox = styled.div`
  ${flexColumn}
  gap: ${({ theme: { spacing } }) => spacing[4]};
`;

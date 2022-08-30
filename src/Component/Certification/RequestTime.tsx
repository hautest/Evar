import { Typography } from "../Base/Typography";
import { Modal } from "../Base/Modal";
import { useState, ChangeEvent } from "react";
import { Button } from "../Base/Button";
import styled, { css } from "styled-components";
import { flexColumn } from "../../style";
import { TypograpyBox } from "./TypograpyBox";

export function RequestTime() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [modal, setModal] = useState(false);

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setDate(value);
  };
  const handleTime = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setTime(value);
  };
  const handleModalOn = () => {
    setModal(true);
  };
  const handleModalOff = () => {
    setModal(false);
  };
  return (
    <div>
      <TypographyBox>
        <Typography size="16">충전서비스 요청시간</Typography>
        <Typography size="12" color="gray2">
          예약신청 장소 주차장에 도착하는 시간을 입력해주세요
        </Typography>
        <Typography size="12" color="gray2">
          요청시간으로부터 서비스는 약 1시간 반 소요됩니다.
        </Typography>
        <Typography size="12" color="primary">
          예약확정이 된 경우에만 서비스가 가능합니다
        </Typography>
        <Typography size="12" color="primary">
          현재시각으로부터 3시간 이후부터 선택이 가능합니다
        </Typography>
      </TypographyBox>
      <TypograpyBox onClick={handleModalOn}>
        <Typography color="gray" size="14">
          충전요청시간
        </Typography>
        <Typography size="14">{date}</Typography>
        <Typography size="14">{time}</Typography>⏰
      </TypograpyBox>
      <Modal visible={modal}>
        <ModalContent>
          <div>
            <TimeInput onChange={handleDate} value={date} type="date" />
            <TimeInput value={time} onChange={handleTime} type="time" />
          </div>
          <ButtonBox>
            <Button onClick={handleModalOff} fontSize="14">
              닫기
            </Button>
          </ButtonBox>
        </ModalContent>
      </Modal>
    </div>
  );
}

const ModalContent = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    background-color: ${colors.white};
    padding: ${spacing[10]};
  `}
  width: 50vw;
  ${flexColumn}
  justify-content: space-between;
  align-items: center;
  height: 15vh;
`;
const TimeInput = styled.input`
  ${({ theme: { colors, spacing } }) => css`
    color: ${colors.primary};
    font-size: ${spacing[20]};
  `}
  width: 100%;
  border: none;
`;
const ButtonBox = styled.div`
  width: 100%;
  height: 30%;
`;
const TypographyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { spacing } }) => spacing[4]};
`;

import { Typography } from "../Base/Typography";
import { Modal } from "../Base/Modal";
import { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import { Button } from "../Base/Button";
import styled, { css } from "styled-components";
import { flexColumn } from "../../style";
import { useGetTime } from "../../hooks";
import { TypograpyBox } from "./TypograpyBox";

interface RequestTimeProps {
  date: string;
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
  setDate: Dispatch<SetStateAction<string>>;
}

export function RequestTime({
  date,
  time,
  setDate,
  setTime,
}: RequestTimeProps) {
  const [modal, setModal] = useState(false);
  const [selectTime, setSelectTime] = useState({ date: "", time: "" });
  const [currentDate, currentTime] = useGetTime();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, type },
    } = e;
    if (type === "date") {
      setSelectTime((prev) => {
        const newState = { ...prev, date: value };
        return newState;
      });
      return;
    }
    if (type === "time") {
      setSelectTime((prev) => {
        const newState = { ...prev, time: value };
        return newState;
      });
    }
  };
  const handleModalOn = () => {
    setModal(true);
  };
  const handleModalOff = () => {
    // 선택한 날, 시간이 과거인지 묻는 조건문
    if (
      parseInt(selectTime.date.replace("-", "").replace("-", "")) <
        parseInt(currentDate.replace("-", "").replace("-", "")) ||
      (parseInt(selectTime.date.replace("-", "").replace("-", "")) ===
        parseInt(currentDate.replace("-", "").replace("-", "")) &&
        parseInt(selectTime.time.replace(":", "")) <
          parseInt(currentTime.replace(":", "")))
    ) {
      setSelectTime({ date: "", time: "" });
      alert("과거의 시간을 선택하셨어요~");
      return;
    }
    setDate(selectTime.date);
    setTime(selectTime.time);
    setModal(false);
  };
  return (
    <>
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
            <TimeInput
              onChange={handleChange}
              value={selectTime.date}
              type="date"
            />
            <TimeInput
              value={selectTime.time}
              onChange={handleChange}
              disabled={!selectTime.date}
              type="time"
            />
          </div>
          <ButtonBox>
            <Button onClick={handleModalOff} fontSize="14">
              닫기
            </Button>
          </ButtonBox>
        </ModalContent>
      </Modal>
    </>
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
  ${flexColumn}
  gap: ${({ theme: { spacing } }) => spacing[4]};
`;

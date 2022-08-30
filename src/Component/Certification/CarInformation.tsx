import { useState, MouseEvent, ChangeEvent } from "react";
import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";
import { CarSelectList } from "./CarSelectList";
import { Typography } from "../Base/Typography";
import { WarnningText } from "../WarnningText";
import { Input } from "../Base/Input";
import { TypograpyBox } from "./TypograpyBox";
import { Modal } from "../Base/Modal";
import { flexColumn } from "../../style";

interface CarInfomationProps {
  carName: string;
  carNum: string;
  setCarNum: Dispatch<SetStateAction<string>>;
  setCarName: Dispatch<SetStateAction<string>>;
}

export function CarInfomation({
  carNum,
  setCarNum,
  carName,
  setCarName,
}: CarInfomationProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleSelect = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      const {
        target: { innerText },
      } = e;
      setCarName(innerText);
      setModalVisible(false);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setCarNum(value);
  };
  return (
    <StyledCarInfomation>
      <Typography size="16">차량 정보</Typography>
      <TypograpyBox onClick={handleOpenModal}>
        <Typography size="14" color="gray">
          차종
        </Typography>
        <Typography size="14">{carName}</Typography>
        🚗
      </TypograpyBox>
      <Input
        value={carNum}
        fontSize="14"
        border="all"
        placeholder="차량번호 뒤 4자리"
        onChange={handleChange}
        maxLength={4}
      />
      <WarnningText
        value={carNum}
        state={carNum.length !== 4}
        text={{
          zeroLen: "차량번호 끝 4자리를 입력해주세요",
          stateTrue: "올바르지 않은 번호입니다",
        }}
      />
      <Modal visible={modalVisible}>
        <CarSelectList onClick={handleSelect} />
      </Modal>
    </StyledCarInfomation>
  );
}

const StyledCarInfomation = styled.div`
  ${flexColumn}
  gap: ${({ theme: { spacing } }) => spacing[10]};
`;

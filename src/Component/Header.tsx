import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled, { css } from "styled-components";

import { Modal } from "./Base/Modal";
import { Typography } from "./Base/Typography";
import { flex, flexColumn } from "../style";

export function Header() {
  const nav = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const handleClick = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleHome = () => {
    nav("/");
  };
  return (
    <>
      <StlyedHeader onClick={handleClick}>
        <Typography size="18">홈으로</Typography>
      </StlyedHeader>
      <Modal visible={modalVisible}>
        <ModalContent>
          <TopBox>
            <Typography size="20">홈으로 돌아가기</Typography>
            <Typography size="16">계속 진행시 홈으로 돌아가며, 기존</Typography>
            <Typography size="16">입력내용이 모두 사라집니다.</Typography>
          </TopBox>
          <BottomBox>
            <Typography onClick={handleCancel} color="primary" size="14">
              취소
            </Typography>
            <Typography onClick={handleHome} color="primary" size="14">
              돌아가기
            </Typography>
          </BottomBox>
        </ModalContent>
      </Modal>
    </>
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

const ModalContent = styled.div`
  ${flexColumn}
  ${({ theme: { colors, spacing } }) => css`
    background-color: ${colors.white};
    padding: ${spacing[20]};
    box-shadow: ${spacing[4]} ${spacing[4]} ${spacing[4]} ${colors.black};
    gap: ${spacing[8]};
  `}
`;

const TopBox = styled.div`
  ${flexColumn}
  gap: ${({ theme: { spacing } }) => spacing[8]};
`;

const BottomBox = styled.div`
  ${flex}
  justify-content: flex-end;
  gap: ${({ theme: { spacing } }) => spacing[8]};
  cursor: pointer;
`;

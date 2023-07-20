import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled, { css } from "styled-components";

import { Modal } from "./Base/Modal";
import { ButtonInModal } from "./ButtonInModal";
import { ModalBackground } from "./ModalBackground";
import { Typography } from "./Base/Typography";
import { flexColumn } from "../style";
import { useRouter } from "../hooks/useRouter";

export function Header() {
  const { back, push } = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const handleClick = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleHome = () => {
    push({ url: "/" });
  };
  return (
    <>
      <StlyedHeader>
        <Typography onClick={handleClick} size="18">
          처음으로
        </Typography>
        <Typography onClick={() => back()} size="18">
          뒤로
        </Typography>
      </StlyedHeader>
      <Modal visible={modalVisible}>
        <ModalBackground>
          <TopBox>
            <Typography size="20">홈으로 돌아가기</Typography>
            <Typography size="16">계속 진행시 홈으로 돌아가며, 기존</Typography>
            <Typography size="16">입력내용이 모두 사라집니다.</Typography>
          </TopBox>
          <ButtonInModal
            leftValue="취소"
            leftClick={handleCancel}
            rightValue="돌아가기"
            rightClick={handleHome}
          />
        </ModalBackground>
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

const TopBox = styled.div`
  ${flexColumn}
  gap: ${({ theme: { spacing } }) => spacing[8]};
`;

import { useState, MouseEvent } from "react";
import styled from "styled-components";
import { HelpHeader, SelectBox, Modal } from "../../Component";
import { flexColumn } from "../../style";
import { termsAndConditionsObject } from "../../termsAndConditionsObject";

export function Term() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] =
    useState<keyof typeof termsAndConditionsObject>();
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      const {
        target: { id },
      } = e;
      if (
        id === "charging" ||
        id === "location" ||
        id === "privacy" ||
        id === "identification"
      ) {
        setModalContent(id);
        setModal(true);
      }
    }
  };
  const handleModalOff = () => {
    setModal(false);
  };
  return (
    <div>
      <HelpHeader />
      <SelectBox onClick={handleClick} />
      <Modal visible={modal} onClick={handleModalOff}>
        <ModalInnerBox>
          {modalContent && termsAndConditionsObject[modalContent]}
        </ModalInnerBox>
      </Modal>
    </div>
  );
}
const ModalInnerBox = styled.article`
  padding: ${({ theme: { spacing } }) => spacing[20]};
  background-color: ${({ theme: { colors } }) => colors.white};
  ${flexColumn}
  overflow-y: scroll;
  height: 50vh;
  ::-webkit-scrollbar {
    display: none;
  }
  word-break: break-all;
`;

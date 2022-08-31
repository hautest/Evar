import styled from "styled-components";
import { faqData } from "../../Component/Help/data";
import {
  Select,
  HelpHeader,
  Modal,
  ModalBackground,
  ButtonInModal,
  Typography,
} from "../../Component";
import { useState } from "react";
import { flexColumn } from "../../style";

export function FaQ() {
  const [answer, setAnswer] = useState("");
  const [modal, setModal] = useState(false);
  const handleOnModal = () => {
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
    setAnswer("");
  };
  return (
    <StyledFaQ>
      <HelpHeader />
      {faqData.map(({ q, a, id }) => (
        <Select
          onClick={() => {
            setAnswer(a);
            handleOnModal();
          }}
          key={id}
        >
          <Typography size="14">{q}</Typography>
        </Select>
      ))}
      <Modal visible={modal}>
        <ModalBackground>
          <Answer>{answer}</Answer>
          <ButtonInModal rightValue="닫기" rightClick={handleClose} />
        </ModalBackground>
      </Modal>
    </StyledFaQ>
  );
}

const StyledFaQ = styled.main`
  ${flexColumn}
  gap: ${({ theme: { spacing } }) => spacing[4]};
`;
const Answer = styled.div`
  width: 80vw;
`;

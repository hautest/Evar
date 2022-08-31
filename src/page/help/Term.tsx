import { useState, MouseEvent } from "react";
import {
  HelpHeader,
  SelectBox,
  Modal,
  LongTextModalBox,
} from "../../Component";
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
        <LongTextModalBox>
          {modalContent && termsAndConditionsObject[modalContent]}
        </LongTextModalBox>
      </Modal>
    </div>
  );
}

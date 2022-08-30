import styled from "styled-components";
import { createPortal } from "react-dom";
import { ReactNode, MouseEvent, useEffect, useState } from "react";

interface ModalInterface {
  children: ReactNode;
  visible: boolean;
  onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}

function Portal({ children }: Pick<ModalInterface, "children">) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setElement(document.getElementById("modal"));
  }, []);

  if (!element) {
    return <></>;
  }

  return createPortal(children, element);
}

export function Modal({ children, visible, onClick }: ModalInterface) {
  return (
    <Portal>
      <StyledModal visible={visible} onClick={onClick}>
        {children}
      </StyledModal>
    </Portal>
  );
}

const StyledModal: React.FC<ModalInterface> = styled.div<ModalInterface>`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;
`;

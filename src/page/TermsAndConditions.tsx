import styled, { css } from "styled-components";
import { useRecoilValue } from "recoil";
import { useState, MouseEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { flexColumn } from "../style";
import { termsAndConditionsObject } from "../termsAndConditionsObject";
import { locationAtom } from "../atom/location";
import {
  Modal,
  Button,
  Notification,
  SelectBox,
  Header,
  LongTextModalBox,
} from "../Component";

export function TermsAndConditions() {
  const [state, setState] = useState({
    charging: false,
    location: false,
    privacy: false,
    identification: false,
  });
  const location = useRecoilValue(locationAtom);
  const nav = useNavigate();
  const [modalValue, setModalValue] =
    useState<keyof typeof termsAndConditionsObject>();
  const [modalVisible, setModalVisible] = useState(false);
  const handleSelect = (e: MouseEvent<HTMLDivElement>) => {
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
        setModalValue(id);
        setModalVisible(true);
      }
    }
  };
  const handleButtonClick = () => {
    setState((prev) => {
      if (modalValue === undefined) {
        return prev;
      }
      const newState = { ...prev, [modalValue]: true };
      return newState;
    });
  };
  const handleNextPage = () => {
    nav("/certification");
  };
  useEffect(() => {
    if (!location) {
      nav("/");
    }
  }, [location, nav]);
  return (
    <StyledTermsAndConditions>
      <TopsideBox>
        <Header />
        <Notification />
      </TopsideBox>
      <BottomBox>
        <SelectBox state={state} onClick={handleSelect} />
        <Footer>
          <Button
            onClick={handleNextPage}
            disabled={
              !(
                state.charging &&
                state.identification &&
                state.location &&
                state.privacy
              )
            }
            fontSize="20"
          >
            다음
          </Button>
        </Footer>
      </BottomBox>
      <Modal
        visible={modalVisible}
        onClick={() => {
          setModalVisible(false);
        }}
      >
        {modalValue && (
          <>
            <LongTextModalBox>
              {termsAndConditionsObject[modalValue]}
              <ButtonBox>
                <Button fontSize="20" onClick={handleButtonClick}>
                  동의하기
                </Button>
              </ButtonBox>
            </LongTextModalBox>
          </>
        )}
      </Modal>
    </StyledTermsAndConditions>
  );
}
const ButtonBox = styled.div``;

const Footer = styled.footer``;

const StyledTermsAndConditions = styled.div`
  ${({ theme: { spacing } }) => css`
    gap: ${spacing[10]};
    padding: ${spacing[14]};
  `}
  ${flexColumn}
  justify-content: space-between;
  height: 100vh;
`;

const TopsideBox = styled.div`
  ${flexColumn}
  gap: ${({ theme: { spacing } }) => spacing[20]};
`;

const BottomBox = styled.div`
  ${flexColumn}
  gap: ${({ theme: { spacing } }) => spacing[10]};
`;

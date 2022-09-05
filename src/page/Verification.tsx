import { useState } from "react";
import styled, { css } from "styled-components";
import { TypograpyBox } from "../Component/Verification/TypograpyBox";
import {
  Header,
  FixedMap,
  Phone,
  Typography,
  CarInfomation,
  Charge,
  RequestTime,
  Modal,
  ButtonInModal,
  ModalBackground,
  Button,
} from "../Component";
import { useRecoilValue } from "recoil";
import { locationAtom } from "../atom/location";
import { flexColumn } from "../style";
import { useNavigate } from "react-router-dom";

export function Verification() {
  const location = useRecoilValue(locationAtom);
  const nav = useNavigate();

  const [isPhonVerification, setPhoneVerification] = useState(false);
  const [phoneNum, setPhoneNum] = useState("");
  const [carName, setCarName] = useState("");
  const [carNum, setCarNum] = useState("");
  const [chargeValue, setChargeValue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [modal, setModal] = useState(false);
  const isSelectAllValue =
    carName && chargeValue && date && time && carNum.length === 4;
  const handleClick = () => {
    setModal(true);
  };
  const handleCancel = () => {
    setModal(false);
  };
  const handleNext = () => {
    nav("/confirmation");
  };
  return (
    <StyledVerification>
      <Header />
      <FixedMap />
      {!isPhonVerification ? (
        <Phone
          phoneNum={phoneNum}
          setPhoneNum={setPhoneNum}
          setPhoneVerification={setPhoneVerification}
        />
      ) : (
        <TypograpyBox>
          <Typography size="16">휴대폰 인증완료</Typography>
          <Typography size="16">✅</Typography>
        </TypograpyBox>
      )}
      {isPhonVerification && (
        <Main>
          <CarInfomation
            setCarNum={setCarNum}
            carNum={carNum}
            setCarName={setCarName}
            carName={carName}
          />
          <Charge setChargeValue={setChargeValue} chargeValue={chargeValue} />
          <RequestTime
            date={date}
            time={time}
            setDate={setDate}
            setTime={setTime}
          />
          {isSelectAllValue && (
            <div>
              <Typography size="16">결제 금액</Typography>
              <TypographyBox>
                <Typography color="gray2" size="14">
                  주문 금액
                </Typography>
                <Typography size="14">30,000원</Typography>
              </TypographyBox>
              <TypographyBox>
                <Typography color="gray2" size="14">
                  할인 금액
                </Typography>
                <TypographyBox>
                  <Discount>실증기간무료혜텍적용</Discount>
                  <Typography size="14">30,000원</Typography>
                </TypographyBox>
              </TypographyBox>
              <Hr />
              <TypographyBox>
                <Typography color="gray2" size="14">
                  총 금액
                </Typography>
                <Typography size="14">0원</Typography>
              </TypographyBox>
            </div>
          )}
          <ButtonBox>
            <Button onClick={handleClick} disabled={!isSelectAllValue}>
              무료로 예약하기
            </Button>
          </ButtonBox>
        </Main>
      )}
      <Modal visible={modal}>
        <ModalBackground>
          <Typography size="20">★ 예약 내역 확인 ★</Typography>
          <Typography color="gray2" size="16">
            예약 완료 후 취소할 수 없습니다
          </Typography>
          <Typography color="gray2" size="16">
            {`장소 : ${location}`}
          </Typography>
          <Typography color="gray2" size="16">
            {`휴대폰번호 : ${phoneNum}`}
          </Typography>
          <Typography size="16" color="gray2">
            {`차종 : ${carName}`}
          </Typography>
          <Typography size="16" color="gray2">
            {`차량번호 : ${carNum}`}
          </Typography>
          <Typography size="16" color="gray2">
            {`충전량 : ${chargeValue}`}
          </Typography>
          <Typography size="16" color="gray2">
            {`충전요청시간 : ${date} ${time}`}
          </Typography>
          <ButtonInModal
            rightClick={handleNext}
            leftValue="취소"
            rightValue="진행"
            leftClick={handleCancel}
          />
        </ModalBackground>
      </Modal>
    </StyledVerification>
  );
}

const StyledVerification = styled.div`
  ${({ theme: { spacing } }) => css`
    padding: 0 ${spacing[20]};
    gap: ${spacing[12]};
  `}
  ${flexColumn}
  height: 100vh;
`;
const Discount = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    background-color: ${colors.primary};
    color: ${colors.white};
    padding: ${spacing[4]};
    border-radius: ${spacing[4]};
    font-size: ${spacing[12]};
  `}
  width: fit-content;
`;
const TypographyBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing[4]};
`;
const Hr = styled.hr`
  color: ${({ theme: { colors } }) => colors.gray2};
`;
const Main = styled.main`
  ${flexColumn}
  height: 70%;
  justify-content: space-between;
`;
const ButtonBox = styled.div`
  height: 4vh;
`;

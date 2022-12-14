import { Typography } from "../Base/Typography";
import { InputAndButton } from "./InputAndButton";
import styled from "styled-components";
import { WarnningText } from "../WarnningText";
import {
  ChangeEvent,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { flexColumn } from "../../style";

const REGEXP_NUMBER = /[^0-9]/;
const PHONE_NUMBER = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;

interface PhoneProps {
  setPhoneVerification: Dispatch<SetStateAction<boolean>>;
  setPhoneNum: Dispatch<SetStateAction<string>>;
  phoneNum: string;
}

export function Phone({
  phoneNum,
  setPhoneNum,
  setPhoneVerification,
}: PhoneProps) {
  const [state, setState] = useState(false);
  const [sendVerification, setSendVerification] = useState(false);
  const [isVerification, setIsVerification] = useState(false);

  const [verificationValue, setVerificationValue] = useState("");

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    if (REGEXP_NUMBER.test(value)) return;
    setPhoneNum(value.slice(0, 11));
  };
  const handleCertChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    if (REGEXP_NUMBER.test(value)) return;
    setVerificationValue(value.slice(0, 6));
  };
  const handleSendPhone = () => {
    setSendVerification(true);
  };
  const handleSendCert = () => {
    setIsVerification(true);
    setPhoneVerification(true);
  };
  useEffect(() => {
    if (!PHONE_NUMBER.test(phoneNum) || phoneNum.length !== 11) {
      setState(false);
      return;
    }
    setState(true);
  }, [phoneNum]);
  return (
    <StyledPhone>
      <Typography size="16">휴대폰번호 인증</Typography>
      <Typography size="12" color="gray2">
        충전서비스 당첨시, 인증된 번호로 연락드립니다.
      </Typography>
      <InputAndButton
        onClick={handleSendPhone}
        buttonState={!state || sendVerification}
        buttonValue="인증번호 발송"
        inputValue={phoneNum}
        placeholder="테스트용으로 010 아무 번호 입력"
        onChange={handlePhoneChange}
        maxLength={11}
        inputState={sendVerification}
      />
      <WarnningText
        value={phoneNum}
        state={!state}
        text={{
          zeroLen: "휴대폰 번호를 적어주세요",
          stateTrue: "올바른 번호가 아닙니다",
        }}
      />
      {sendVerification && (
        <div>
          <InputAndButton
            onClick={handleSendCert}
            buttonState={verificationValue.length !== 6 || isVerification}
            buttonValue="인증확인"
            inputValue={verificationValue}
            placeholder="인증번호"
            onChange={handleCertChange}
            maxLength={6}
            inputState={isVerification}
          />
          <WarnningText
            value={verificationValue}
            state={verificationValue.length !== 6}
            text={{
              zeroLen: "코드를 적어주세요",
              stateTrue: "올바른 코드가 아닙니다",
            }}
          />
        </div>
      )}
    </StyledPhone>
  );
}
const StyledPhone = styled.div`
  ${flexColumn}
  gap: ${({ theme: { spacing } }) => spacing[8]};
`;

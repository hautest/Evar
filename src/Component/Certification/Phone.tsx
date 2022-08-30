import { Typography } from "../Base/Typography";
import { InputAndButton } from "./InputAndButton";
import { WarnningText } from "../WarnningText";
import {
  ChangeEvent,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

const REGEXP_NUMBER = /[^0-9]/;
const PHONE_NUMBER = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;

interface PhoneProps {
  setPhoneCertification: Dispatch<SetStateAction<boolean>>;
}

export function Phone({ setPhoneCertification }: PhoneProps) {
  const [state, setState] = useState(false);
  const [sendCertification, setSendCertification] = useState(false);
  const [isCertification, setIsCertification] = useState(false);

  const [phoneNumValue, setPhoneNumValue] = useState("");
  const [certificationValue, setCertificationValue] = useState("");

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    if (REGEXP_NUMBER.test(value)) return;
    setPhoneNumValue(value.slice(0, 11));
  };
  const handleCertChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    if (REGEXP_NUMBER.test(value)) return;
    setCertificationValue(value.slice(0, 6));
  };
  const handleSendPhone = () => {
    setSendCertification(true);
  };
  const handleSendCert = () => {
    setIsCertification(true);
    setPhoneCertification(true);
  };
  useEffect(() => {
    if (!PHONE_NUMBER.test(phoneNumValue) || phoneNumValue.length !== 11) {
      setState(false);
      return;
    }
    setState(true);
  }, [phoneNumValue]);
  return (
    <div>
      <Typography size="16">휴대폰번호 인증</Typography>
      <Typography size="12" color="gray2">
        충전서비스 당첨시, 인증된 번호로 연락드립니다.
      </Typography>
      <div>
        <InputAndButton
          onClick={handleSendPhone}
          buttonState={!state || sendCertification}
          buttonValue="인증번호 발송"
          inputValue={phoneNumValue}
          placeholder="테스트용으로 010 아무 번호 입력"
          onChange={handlePhoneChange}
          maxLength={11}
          inputState={sendCertification}
        />
      </div>
      <WarnningText
        value={phoneNumValue}
        state={!state}
        text={{
          zeroLen: "휴대폰 번호를 적어주세요",
          stateTrue: "올바른 번호가 아닙니다",
        }}
      />
      {sendCertification && (
        <div>
          <InputAndButton
            onClick={handleSendCert}
            buttonState={certificationValue.length !== 6 || isCertification}
            buttonValue="인증확인"
            inputValue={certificationValue}
            placeholder="인증번호"
            onChange={handleCertChange}
            maxLength={6}
            inputState={isCertification}
          />
          <WarnningText
            value={certificationValue}
            state={certificationValue.length !== 6}
            text={{
              zeroLen: "코드를 적어주세요",
              stateTrue: "올바른 코드가 아닙니다",
            }}
          />
        </div>
      )}
    </div>
  );
}

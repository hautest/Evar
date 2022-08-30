import { useState } from "react";
import styled, { css } from "styled-components";
import { TypograpyBox } from "../Component/Certification/TypograpyBox";
import {
  Header,
  FixedMap,
  Phone,
  Typography,
  CarInfomation,
  Charge,
} from "../Component";

export function Certification() {
  const [isPhonCertification, setPhoneCertification] = useState(false);
  return (
    <StyledCertification>
      <Header />
      <FixedMap />
      {!isPhonCertification ? (
        <Phone setPhoneCertification={setPhoneCertification} />
      ) : (
        <TypograpyBox>
          <Typography size="16">휴대폰 인증완료</Typography>
          <Typography size="16">✅</Typography>
        </TypograpyBox>
      )}
      {isPhonCertification && (
        <div>
          <CarInfomation />
          <Charge />
        </div>
      )}
    </StyledCertification>
  );
}

const StyledCertification = styled.div`
  ${({ theme: { colors } }) => css``}
`;

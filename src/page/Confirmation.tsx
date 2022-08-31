import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { Button, Typography } from "../Component";
import {
  flexColumnJustCenterAlignCenter,
  flexJustCenterAlignCenter,
} from "../style";

export function Confirmation() {
  const nav = useNavigate();
  const handleHome = () => {
    nav("/");
  };
  return (
    <StyledConfirmation>
      <Header>
        <Typography color="white" size="16">
          OnDemand 충전서비스
        </Typography>
      </Header>
      <Main>
        <Img
          alt="지도모양의 사진"
          src="https://evarclab.github.io/OnDemandChargingService/assets/image/img-empty-apply/img-empty-apply.svg"
        />
        <Typography size="20">예약확정 대기중 입니다</Typography>
        <Typography size="20"> (예약신청완료)</Typography>
        <Typography size="14">
          ● '예약확정' 되어야만 서비스가 진행됩니다
        </Typography>
        <Typography size="14">
          ● 관리자의 확인 후, 예약확정여부를 알려드립니다
        </Typography>
        <Typography size="14">
          ● 예약신청시 제출하신 번호로 개별 연락드립니다
        </Typography>
        <ButtonBox>
          <Button onClick={handleHome}>홈으로 이동</Button>
        </ButtonBox>
      </Main>
    </StyledConfirmation>
  );
}
const StyledConfirmation = styled.div`
  height: 100vh;
`;
const Header = styled.header`
  ${({ theme: { colors, spacing } }) => css`
    background-color: ${colors.primary};
  `}
  height: 5vh;
  ${flexJustCenterAlignCenter}
`;

const Main = styled.main`
  ${flexColumnJustCenterAlignCenter}
  height: 80vh;
  gap: ${({ theme: { spacing } }) => spacing[8]};
`;

const ButtonBox = styled.div`
  height: 4vh;
`;

const Img = styled.img`
  width: 400px;
`;

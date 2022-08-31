import styled from "styled-components";
import { flexColumn, flexJustCenter } from "../../style";
import { Typography } from "../Base/Typography";

export function Notification() {
  return (
    <StyledNotification>
      <Title>
        <Typography size="20" fontWeight={700}>
          ※ 서비스 안내사항 ※
        </Typography>
      </Title>
      <Typography size="14" fontWeight={400}>
        1. 본 서비스는 현재 시범운영중으로, 무료로 서비스를 제공해드리고
        있습니다.
      </Typography>
      <span>
        <Typography size="14" color="primary" fontWeight={400}>
          2. 반드시 인근 충전소 위치와 충전 방법을 미리 확인해주세요!
        </Typography>
        <Typography size="14" fontWeight={400}>
          서비스 예약상황에 따라 다양한 이유(주차장 상황 등)로 서비스가 실제
          제공되지 않을 수 있습니다.
        </Typography>
      </span>
      <span>
        <Typography size="14" color="primary" fontWeight={400}>
          3. 차안에 귀중품이나 개인 소지품은 남겨두지 말아주세요!
        </Typography>
        <Typography size="14" fontWeight={400}>
          충전기 연결을 위해 관제센터에서 차량 잠금을 잠시동안 해제합니다.
        </Typography>
        <Typography size="14" color="primary" fontWeight={400}>
          분실물 발생시엔 책임지지 않으며,
        </Typography>
        <Typography size="14" fontWeight={400}>
          이에 동의하신 고객께만 서비스를 제공해드립니다.
        </Typography>
      </span>
    </StyledNotification>
  );
}

const StyledNotification = styled.div`
  ${flexColumn}
  gap: ${({ theme: { spacing } }) => spacing[10]};
`;

const Title = styled.h1`
  ${flexJustCenter}
`;

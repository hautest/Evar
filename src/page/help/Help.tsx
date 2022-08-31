import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header, Select, Button, Typography } from "../../Component";

export function Help() {
  const nav = useNavigate();
  const handleKakao = () => {
    window.open("https://pf.kakao.com/_QxbpxdK/chat");
  };
  const handleFaQ = () => {
    nav("faq");
  };
  const handleTerm = () => {
    nav("term");
  };
  const handleNotice = () => {
    nav("notice");
  };
  return (
    <div>
      <Header />
      <TopBox>
        <Img
          alt="해드셋 이미지"
          src="https://evarclab.github.io/OnDemandChargingService/assets/icon/qna/ic-qna.svg"
        />
        <Typography size="14" fontWeight={400}>
          불편한 사항이나 개선점이 있다면
        </Typography>
        <Typography size="14" fontWeight={400}>
          언제든지 알려주세요
        </Typography>
        <ButtonBox>
          <Button onClick={handleKakao}>문의하기</Button>
        </ButtonBox>
      </TopBox>
      <Select onClick={handleFaQ}>자주하는 질문</Select>
      <Select onClick={handleTerm}>이용약관</Select>
      <Select onClick={handleNotice}>공지사항</Select>
    </div>
  );
}
const Img = styled.img`
  width: 40px;
`;
const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing[10]};
  height: 30vh;
`;
const ButtonBox = styled.div`
  width: 20%;
  height: 15%;
`;

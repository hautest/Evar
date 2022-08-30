import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import { Button, Map, Typography } from "../Component";

export function Home() {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/search");
  };
  return (
    <StyledHome>
      <Header>
        <Typography size="16" fontWeight={400}>
          OnDemand 충전서비스
        </Typography>
      </Header>
      <Main>
        <Map />
      </Main>
      <ButtonBox>
        <Button onClick={handleClick}>위치를 검색하러가기</Button>
      </ButtonBox>
    </StyledHome>
  );
}

const Main = styled.main`
  height: 90%;
  width: 100%;
`;

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Header = styled.header`
  ${({ theme: { colors } }) => css`
    background-color: ${colors.primary};
    color: ${colors.white};
  `}
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonBox = styled.footer`
  height: 5%;
`;

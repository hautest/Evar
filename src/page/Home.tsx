import styled, { css } from "styled-components";

import { Map, Typography } from "../Component";

export function Home() {
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
    </StyledHome>
  );
}

const Main = styled.main`
  height: 95%;
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

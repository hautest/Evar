import styled, { css } from "styled-components";
import { locationAtom, coordinateAtom } from "../atom/location";
import { useRecoilState, useSetRecoilState } from "recoil";
import { flexJustCenterAlignCenter } from "../style";
import { Button, Map, Typography } from "../Component";

export function Home() {
  const [location, setLocation] = useRecoilState(locationAtom);
  const setCoordinate = useSetRecoilState(coordinateAtom);
  const search = () => {
    new window.daum.Postcode({
      oncomplete: function (data: any) {
        setLocation(data.jibunAddress);
      },
    }).open();
  };
  if (!!location) {
    window.naver.maps.Service.geocode(
      {
        address: location,
      },
      function (status: any, response: any) {
        if (status !== window.naver.maps.Service.Status.OK) {
          return alert("Something wrong!");
        }
        const result = response.result;
        const { x, y } = result.items[0].point;
        setCoordinate({ x, y });
      }
    );
  }
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
        <Button onClick={search}>위치를 검색하러가기</Button>
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
  ${flexJustCenterAlignCenter}
`;
const ButtonBox = styled.footer`
  height: 5%;
`;

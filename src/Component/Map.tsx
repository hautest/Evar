import styled, { css } from "styled-components";
import { Typography } from "./Base/Typography";
import { Button } from "./Base/Button";
import { locationAtom, coordinateAtom } from "../atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export function Map() {
  const [location, setLocation] = useRecoilState(locationAtom);
  const [coordinate, setCoordinate] = useRecoilState(coordinateAtom);

  useEffect(() => {
    const mapDiv = document.getElementById("map");

    var jeju = new window.naver.maps.LatLngBounds(
      new window.naver.maps.LatLng(33.1368681, 126.084821),
      new window.naver.maps.LatLng(33.6076496, 126.9657871)
    );

    const map = new window.naver.maps.Map(mapDiv, {
      center: new window.naver.maps.LatLng(coordinate.y, coordinate.x),
      maxBounds: jeju,
    });

    const callBack = () => {
      const coordinate = { x: map.data.map.center.x, y: map.data.map.center.y };
      setCoordinate({ x: coordinate.x, y: coordinate.y });
      window.naver.maps.Service.reverseGeocode(
        {
          coords: new window.naver.maps.LatLng(coordinate.y, coordinate.x),
          orders: [
            window.naver.maps.Service.OrderType.ADDR,
            window.naver.maps.Service.OrderType.ROAD_ADDR,
          ].join(","),
        },
        (
          status: number,
          response: {
            v2: {
              address: {
                jibunAddress: string;
              };
            };
          }
        ) => {
          if (status !== window.naver.maps.Service.Status.OK) {
            return alert("Something wrong!");
          }
          const result = response.v2;
          setLocation(result.address.jibunAddress);
        }
      );
    };
    const event = window.naver.maps.Event.addDOMListener(
      mapDiv,
      "click",
      callBack
    );
    return () => window.naver.maps.Event.removeDOMListener(event);
  }, [setLocation, coordinate.y, coordinate.x, setCoordinate]);

  return (
    <StyledMap>
      <Location>
        {location ? (
          <Typography size="14">{location}</Typography>
        ) : (
          <Typography size="14">에바 제주지사</Typography>
        )}
      </Location>
      <MapRender id="map">
        <Marker>중간 장소로 지정</Marker>
      </MapRender>
      <ButtonBox>
        <Button>위치를 검색하러가기</Button>
      </ButtonBox>
    </StyledMap>
  );
}

const Marker = styled.div`
  ${({ theme: { colors, spacing } }) => css`
    background-color: ${colors.primary};
    padding: ${spacing[8]};
    border-radius: ${spacing[8]};
    color: ${colors.white};
    font-size: ${spacing[14]};
  `}
  cursor: pointer;
  position: absolute;
  z-index: 1;
`;
const StyledMap = styled.div`
  width: 100%;
  height: 100%;
`;

const MapRender = styled.main`
  width: 100%;
  height: 90%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Location = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.div`
  height: 5%;
`;
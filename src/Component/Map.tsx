import styled, { css } from "styled-components";
import { useEffect } from "react";
import { Typography } from "./Base/Typography";
import { Marker } from "./Marker";
import { locationAtom, coordinateAtom } from "../atom/location";
import { flexJustCenterAlignCenter } from "../style";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export function Map() {
  const nav = useNavigate();
  const [location, setLocation] = useRecoilState(locationAtom);
  const [coordinate, setCoordinate] = useRecoilState(coordinateAtom);
  const locationVaild =
    (location[0] === "제" && location[1] === "주") || location === "";
  const handleClick = () => {
    if (!locationVaild) {
      alert("제주도안에서만 호출 가능합니다 !");
      return;
    }
    nav("/TermsAndConditions");
  };
  const navHelp = () => {
    nav("/help");
  };
  useEffect(() => {
    const mapDiv = document.getElementById("map");
    const jeju = new window.naver.maps.LatLngBounds(
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
        <Marker onClick={handleClick} state={locationVaild}>
          {locationVaild
            ? "중간 장소로 지정"
            : "제주도안에서만 호출 가능합니다."}
        </Marker>
        <NavHelpImg
          onClick={navHelp}
          alt="상담사 아이콘"
          src="https://evarclab.github.io/OnDemandChargingService/assets/icon/qna/ic-qna.svg"
        />
      </MapRender>
    </StyledMap>
  );
}

const StyledMap = styled.div`
  width: 100%;
  height: 100%;
`;

const MapRender = styled.main`
  width: 100%;
  height: 95%;
  z-index: 2;
  ${flexJustCenterAlignCenter}
`;

const Location = styled.div`
  width: 100%;
  height: 5%;
  ${flexJustCenterAlignCenter}
`;

const NavHelpImg = styled.img`
  ${({ theme: { colors, spacing } }) => css`
    background-color: ${colors.primary};
    right: ${spacing[20]};
  `}
  width: 5vh;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  cursor: pointer;
  bottom: 40px;
`;

import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Typography } from "../Base/Typography";
import { coordinateAtom, locationAtom } from "../../atom/location";

export function FixedMap() {
  const coordination = useRecoilValue(coordinateAtom);
  const location = useRecoilValue(locationAtom);
  const nav = useNavigate();
  useEffect(() => {
    if (!location) {
      nav("/");
    }
    const mapDiv = document.getElementById("fixedMap");
    const jeju = new window.naver.maps.LatLngBounds(
      new window.naver.maps.LatLng(33.1368681, 126.084821),
      new window.naver.maps.LatLng(33.6076496, 126.9657871)
    );

    const map = new window.naver.maps.Map(mapDiv, {
      center: new window.naver.maps.LatLng(coordination.y, coordination.x),
      maxBounds: jeju,
    });
    new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(coordination.y, coordination.x),
      map: map,
    });
  }, [coordination.y, coordination.x, nav, location]);

  return (
    <div>
      <Typography size="16">{location}</Typography>
      <StyledMap id="fixedMap" />
    </div>
  );
}

const StyledMap = styled.div`
  height: 20vh;
`;

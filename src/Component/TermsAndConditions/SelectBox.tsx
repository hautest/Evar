import { MouseEvent } from "react";
import { Select } from "../Base/Select";

interface SelectBoxProps {
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  state: {
    charging: boolean;
    location: boolean;
    privacy: boolean;
    identification: boolean;
  };
}

export function SelectBox({ onClick, state }: SelectBoxProps) {
  return (
    <div>
      <Select onClick={onClick} id="charging">
        On Demand 충전서비스 이용약관 (필수) {state.charging ? "✅" : ""}
      </Select>
      <Select onClick={onClick} id="location">
        위치기반 서비스 이용약관 (필수) {state.location ? "✅" : ""}
      </Select>
      <Select onClick={onClick} id="privacy">
        개인정보 처리방침 (필수) {state.privacy ? "✅" : ""}
      </Select>
      <Select onClick={onClick} id="identification">
        고유식별정보 수집/이용 동의 (필수) {state.identification ? "✅" : ""}
      </Select>
    </div>
  );
}

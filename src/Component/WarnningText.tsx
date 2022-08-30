import { Typography } from "./Base/Typography";

interface WarnningTextProps {
  value: string;
  state: boolean;
  text: {
    zeroLen: string;
    stateTrue: string;
  };
}

export function WarnningText({ value, state, text }: WarnningTextProps) {
  return (
    <Typography color="warn" size="12" fontWeight={400}>
      {value.length === 0 ? text.zeroLen : state ? text.stateTrue : ""}
    </Typography>
  );
}

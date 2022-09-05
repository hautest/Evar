import { useMemo } from "react";

export const useGetTime = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hours = time.getHours();
  const min = time.getMinutes();
  const date = useMemo(() => {
    if (month < 10 && day < 10) return `${year}-0${month}-0${day}`;
    if (month < 10) return `${year}-0${month}-${day}`;
    if (day < 10) return `${year}-${month}-0${day}`;
    return "0";
  }, [year, month, day]);
  const currentTime = useMemo(() => {
    return `${hours}:${min}`;
  }, [hours, min]);
  return [date, currentTime] as const;
};

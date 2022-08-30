import { atom } from "recoil";

export const locationAtom = atom({
  key: "location",
  default: "",
});

export const coordinateAtom = atom({
  key: "coordinate",
  default: {
    x: 126.5714595,
    y: 33.4423818,
  },
});

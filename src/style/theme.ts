const colors = {
  black: "#000000",
  gray: "#333333",
  primary: "#5277ff",
  warn: "#EB5757",
  white: "#ffffff",
};

const spacing = {
  "12": "12px",
  "14": "14px",
  "16": "16px",
  "18": "18px",
  "20": "20px",
};

export const theme = {
  colors,
  spacing,
};

export type ThemeColorType = keyof typeof colors;
export type ThemeSpacingType = keyof typeof spacing;
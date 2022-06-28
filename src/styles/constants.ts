import { css } from "styled-components";

export const color = {
  primary: "#423f35",
  highlight: "#544f42",
};

export const font = {
  regular: 'font-family: "CircularStdBook"; font-weight: normal;',
  medium: 'font-family: "CircularStdMedium"; font-weight: normal;',
  bold: 'font-family: "CircularStdBold"; font-weight: normal;',
  black: 'font-family: "CircularStdBlack"; font-weight: normal;',
  size: (size: number) => `font-size: ${size}px;`,
};
export type FixedLengthArray<TItem, TLength extends number> = [
  TItem,
  ...TItem[]
] & { length: TLength };

export const appTheme = {
  colors: {
    primary: [
      "#f8f3e9",
      "#dedbd2",
      "#c6c3b8",
      "#b0ab9d",
      "#989383",
      "#7e7a68",
      "#635f50",
      "#474439",
      "#2a2920",
      "#0f0f01",
    ] as FixedLengthArray<string, 10>,
  },
};

export const mixins = {
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  boxShadowMedium: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
};

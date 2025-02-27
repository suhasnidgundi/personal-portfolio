import { createTheme } from "@mantine/core";

const color = [
  "#e6f7ff",
  "#d0ebff",
  "#9fd5fc",
  "#6bbdfb",
  "#45a9fa",
  "#309cfa",
  "#2496fb",
  "#1682e0",
  "#0073c9",
  "#0063b2",
];

const theme = createTheme({
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 700,
    sizes: {
      h1: { fontSize: "6vh" },
      h2: { fontSize: "19pt" },
      h3: { fontSize: "16pt" },
      h4: { fontSize: "13pt" },
      h5: { fontSize: "13pt" },
      h6: { fontSize: "13pt" },
    },
  },
  colors: {
    color,
  },
});

export default theme;

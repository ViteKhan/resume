import { createTheme } from "@mui/material/styles";
import { green, red, orange } from "@mui/material/colors";

export const theme = {
  dark: createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#e8dfc7",
        paper: "rgb(35, 48, 68)",
      },
      text: {
        primary: "#3d484b",
        secondary: "#e8dfc7",
      },
      primary: {
        main: "rgb(64, 122, 214)",
        light: "rgb(163, 191, 243)",
        dark: "rgb(31, 102, 239)",
        contrastText: "#91bca8",
      },
      success: {
        main: "rgb(111, 214, 145)",
        light: "rgb(131, 231, 168)",
        dark: green[600],
        contrastText: "rgb(235, 234, 239)",
      },
      warning: {
        main: "rgb(242, 175, 87)",
        light: "rgb(245, 205, 130)",
        dark: orange[600],
        contrastText: "rgb(235, 234, 239)",
      },
      error: {
        main: "rgb(237, 103, 98)",
        light: "rgb(240, 135, 132)",
        dark: red[600],
        contrastText: "rgb(235, 234, 239)",
      },
      info: {
        main: "rgb(142, 221, 229)",
        light: "rgb(183, 238, 242)",
        dark: "rgb(92, 205, 219",
        contrastText: "rgb(235, 234, 239)",
      },
      divider: "rgb(85, 89, 110)",
    },
  }),
  light: createTheme({
    palette: {
      mode: "light",
      background: {
        paper: "rgb(255, 255, 255)",
        default: "rgb(255, 255, 255)",
      },
      text: {
        primary: "rgb(30, 32, 34)",
        secondary: "rgb(103, 119, 136)",
      },
      primary: {
        main: "rgb(64, 122, 214)",
        light: "rgb(163, 191, 243)",
        dark: "rgb(31, 102, 239)",
        contrastText: "rgb(235, 234, 239)",
      },
      success: {
        main: "rgb(111, 214, 145)",
        light: "rgb(131, 231, 168)",
        dark: green[600],
        contrastText: "rgb(235, 234, 239)",
      },
      warning: {
        main: "rgb(242, 175, 87)",
        light: "rgb(245, 205, 130)",
        dark: orange[600],
        contrastText: "rgb(235, 234, 239)",
      },
      error: {
        main: "rgb(237, 103, 98)",
        light: "rgb(240, 135, 132)",
        dark: red[600],
        contrastText: "rgb(235, 234, 239)",
      },
      info: {
        main: "rgb(142, 221, 229)",
        light: "rgb(183, 238, 242)",
        dark: "rgb(92, 205, 219",
        contrastText: "rgb(235, 234, 239)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
    },
  }),
};

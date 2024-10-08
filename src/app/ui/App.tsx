import CssBaseline from "@mui/material/CssBaseline";
import { Theme, ThemeProvider } from "@mui/material/styles";
import { AppRouter } from "../AppRouter/AppRouter";
import { useColorMode } from "../../shared/hooks/useColorMode";
import { theme } from "../../shared/theme";
import "./App.css";

export function App() {
  const { colorMode } = useColorMode();

  return (
    <ThemeProvider theme={(theme as Record<string, Theme>)[colorMode]}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

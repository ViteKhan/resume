import { createContext } from "react";

interface ColorModeContextModel {
  colorMode: string;
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorModeContextModel>(null!);

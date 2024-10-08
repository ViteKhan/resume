import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { ColorModeContext } from "./ColorModeContext";

interface ColorModeContextProviderProps {
  children: ReactNode;
}

export const ColorModeContextProvider: FC<ColorModeContextProviderProps> = ({
  children,
}) => {
  const [colorMode, setColorMode] = useState("dark");
  const toggleColorMode = () => {
    window.localStorage.setItem(
      "themeMode",
      colorMode === "dark" ? "light" : "dark"
    );
    setColorMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    try {
      const themeMode = window.localStorage.getItem("themeMode");
      themeMode ? setColorMode(themeMode) : setColorMode("dark");
    } catch {
      setColorMode("dark");
    }
  }, []);

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);

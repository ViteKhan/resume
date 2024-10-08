import { useContext } from "react";
import { ColorModeContext } from "../providers/ColorModeProvider/ColorModeContext";

export const useColorMode = () => {
  const context = useContext(ColorModeContext);

  if (!context) {
    throw Error('Context was not provided');
  }
  
  return context;
};

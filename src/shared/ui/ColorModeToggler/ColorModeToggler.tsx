import { FC } from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";

import { useColorMode } from "../../hooks/useColorMode";

export const ColorModeToggler: FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      sx={{
        position: "absolute",
        right: "24px",
        top: "12.5px",
      }}
      onClick={toggleColorMode}
      aria-label={"Theme Mode"}
      color={theme.palette.mode === "dark" ? "warning" : "inherit"}
    >
      {theme.palette.mode === "dark" ? (
        <LightModeIcon fontSize="medium" />
      ) : (
        <DarkModeIcon fontSize="medium" />
      )}
    </IconButton>
  );
};

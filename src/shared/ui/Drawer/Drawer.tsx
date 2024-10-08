import { FC } from "react";
import { Box, Drawer as MuiDrawer } from "@mui/material";
import { Navbar } from "../Navbar/Navbar";
import { useTheme } from "@mui/material/styles";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer: FC<DrawerProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();

  return (
    <MuiDrawer
      anchor="left"
      onClose={onClose}
      open={isOpen}
      variant="temporary"
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: 280,
          padding: "20px",
          background: theme.palette.text.primary,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Navbar onClose={onClose} />
      </Box>
    </MuiDrawer>
  );
};

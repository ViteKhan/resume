import { AppBar, Box, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// import { ColorModeToggler } from "../ColorModeToggler/ColorModeToggler";
import { useDisclosure } from "../../hooks/useDisclosure";
import { Navbar } from "../Navbar/Navbar";
import { Sidebar } from "../Sidebar/Sidebar";

export const Header = () => {
  const theme = useTheme();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <AppBar
      elevation={5}
      sx={{
        top: 0,
        border: 0,
        backgroundColor: theme.palette.text.primary,
        backgroundImage: "none",
        color: theme.palette.text.secondary,
      }}
    >
      <Toolbar
        sx={{
          height: "65px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            position: "absolute",
            left: "24px",
            top: "11.5px",
          }}
        >
          <Sidebar isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
          {/* Logo*/}
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              gap: "10px",
              alignItems: "center",
            }}
          >
            <Navbar />
          </Box>
          {/* <ColorModeToggler /> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

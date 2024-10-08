import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Header } from "../../shared/ui/Header/Header";
import { useTheme } from "@mui/material/styles";

export const AppLayout = () => {
  const theme = useTheme();

  return (
    <Box paddingTop="65px" minHeight="100vh">
      <Header />
      <Box
        component="main"
        sx={{
          padding: "20px 0",
          backgroundColor: theme.palette.background.default,
          minHeight: "100vh",
        }}
      >
        <Container maxWidth={false}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

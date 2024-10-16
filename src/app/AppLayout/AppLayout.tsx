import { Outlet, useLocation } from "react-router-dom";
import { Box, Container } from '@mui/material';
import { Header } from '../../shared/ui/Header/Header';
import { useTheme } from "@mui/material/styles";
import { useLayoutEffect } from "react";

export const AppLayout = () => {
  const theme = useTheme();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


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
        <Container maxWidth={false} sx={{ paddingX: '20px' }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

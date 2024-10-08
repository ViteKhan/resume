import { FC, ReactNode, useMemo } from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

interface NavLinkProps {
  href: string;
  icon: ReactNode;
  text: string;
  onClose?: () => void;
}

export const NavLink: FC<NavLinkProps> = ({ href, text, icon, onClose }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === href;

  const color = useMemo(() => {
    const isDark = theme.palette.mode === "dark";
    if (isActive) {
      if (isDark) {
        return theme.palette.primary.contrastText;
      } else {
        return theme.palette.text.secondary;
      }
    }

    if (isDark) {
      return theme.palette.text.secondary;
    }

    return theme.palette.primary.main;
  }, [isActive, theme.palette.mode, theme.palette.primary.contrastText, theme.palette.primary.main, theme.palette.text.secondary]);

  const onClick = () => {
    navigate(href);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Button
      color="primary"
      onClick={onClick}
      size="small"
      variant="text"
      sx={{
        color,
        fontSize: theme.typography.subtitle1,
        fontWeight: "medium",
        textTransform: "none",
        "&:hover": {
          color:
            theme.palette.mode === "dark"
              ? theme.palette.primary.contrastText
              : theme.palette.text.secondary,
        },
        "& svg": {
          mr: 0.5,
        },
      }}
    >
      {icon} {text}
    </Button>
  );
};

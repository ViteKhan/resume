import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

export const BackButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button
      size="small" 
      onClick={handleBack}
      sx={{
        marginBottom: '20px',
        background: theme.palette.primary.contrastText,
        color: theme.palette.text.primary,
      }}
    >
      Назад
    </Button>
  );
};
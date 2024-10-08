import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={handleBack} variant="outlined">
      Назад
    </Button>
  );
};
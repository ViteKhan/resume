import { RoutePath } from "../../config/routeConfig";
import PaletteRoundedIcon from '@mui/icons-material/PaletteRounded';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export const links = [
  {
    href: RoutePath.main,
    text: "Главная",
    icon: <PaletteRoundedIcon />,
  },
  {
    href: RoutePath.about,
    text: "Обо мне",
    icon: <FaceSharpIcon />,
  },
  {
    href: RoutePath.contacts,
    text: "Контакты",
    icon: <AssignmentIndIcon />,
  },
];

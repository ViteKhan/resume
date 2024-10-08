import { Project } from "../ui/Card/Card.types";
// @ts-ignore
import IpponCard from '../../../shared/assets/images/ipponFirst.png';
import { RoutePath } from "../../../shared/config/routeConfig";

export const PROJECTS_LIST: Project[] = [
  {
    name: 'Оформление контента для YouTube канала',
    image: 'wewe',
    link: RoutePath.youtubeChannel,
  },
  {
    name: 'Иллюстрация для приложения NomadHer',
    image: 'weaaawe',
    link: RoutePath.nomadHer,
  },
  {
    name: 'Дизайн рабочих пропусков для IT-компании',
    image: IpponCard,
    link: RoutePath.passCard,
  },
  {
    name: 'Оформление контента для сообщества в VK',
    image: 'sdsd',
    link: RoutePath.vkCommunity,
  },
];
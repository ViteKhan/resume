import IpponCard from '../assets/images/ipponFirst.png';
import { RoutePath } from '../config/routeConfig';
import { Project } from '../types/types';

export const PROJECTS_LIST: Project[] = [
  {
    name: 'Оформление контента для YouTube канала',
    image: IpponCard,
    link: RoutePath.youtubeChannel,
  },
  {
    name: 'Иллюстрация для приложения NomadHer',
    image: IpponCard,
    link: RoutePath.nomadHer,
  },
  {
    name: 'Дизайн рабочих пропусков для IT-компании',
    image: IpponCard,
    link: RoutePath.passCard,
  },
  {
    name: 'Оформление контента для сообщества в VK',
    image: IpponCard,
    link: RoutePath.vkCommunity,
  },
];
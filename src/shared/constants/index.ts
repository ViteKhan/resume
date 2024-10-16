import YoutubeChannel from '../assets/images/youtubeChannelFirst.png';
import NomadHer from '../assets/images/nomadHerHorizontal.png';
import IpponCard from '../assets/images/ipponFirst.png';
import VkCommunity from '../assets/images/vkCommunitySecond.png';
import { RoutePath } from '../config/routeConfig';
import { Project } from '../types/types';

export const PROJECTS_LIST: Project[] = [
  {
    name: 'Оформление контента для YouTube канала',
    image: YoutubeChannel,
    link: RoutePath.youtubeChannel,
  },
  {
    name: 'Иллюстрация для приложения NomadHer',
    image: NomadHer,
    link: RoutePath.nomadHer,
  },
  {
    name: 'Дизайн рабочих пропусков для IT-компании',
    image: IpponCard,
    link: RoutePath.passCard,
  },
  {
    name: 'Оформление контента для сообщества в VK',
    image: VkCommunity,
    link: RoutePath.vkCommunity,
  },
];
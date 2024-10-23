enum AppRoute {
  MAIN = "main",
  ABOUT = "about",
  CONTACTS = "contacts",
  NOT_FOUND = "notFound",
  //  projects
  YOUTUBE_CHANNEL = 'youtubeChannel',
  NOMADHER = 'nomadHer',
  PASS_CARD = 'passCard',
  VK_COMMUNITY = 'vkCommunity',
  COLORING_BOOK = 'coloringBook',
}
  
export const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: "/",
  [AppRoute.ABOUT]: "/about",
  [AppRoute.CONTACTS]: "/contacts",
  [AppRoute.NOT_FOUND]: "*",
  [AppRoute.YOUTUBE_CHANNEL]: 'youtube-channel',
  [AppRoute.NOMADHER]: 'nomadher',
  [AppRoute.PASS_CARD]: 'pass-card',
  [AppRoute.VK_COMMUNITY]: 'vk-community',
  [AppRoute.COLORING_BOOK]: 'coloring-book',
};
  
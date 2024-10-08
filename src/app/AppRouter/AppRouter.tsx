import { Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { RoutePath } from "../../shared/config/routeConfig";
import CircularProgress from "@mui/material/CircularProgress";
import { AppLayout } from "../AppLayout/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: RoutePath.main,
    children: [
      {
        lazy: async () => {
          const { Main } = await import("../../pages/Main/Main");

          return { Component: Main };
        },
        index: true,
      },
    ],
  },
  {
    element: <AppLayout />,
    path: RoutePath.projects,
    children: [
      {
        lazy: async () => {
          const { Projects } = await import("../../pages/Projects/ui");

          return { Component: Projects };
        },
        index: true,
      },
      {
        path: RoutePath.youtubeChannel,
        lazy: async () => {
          const { YoutubeChannelPage } = await import("../../pages/Projects/ui");
          return { Component: YoutubeChannelPage };
        },
      },
      {
        path: RoutePath.nomadHer,
        lazy: async () => {
          const { NomadHerPage } = await import("../../pages/Projects/ui");
          return { Component: NomadHerPage };
        },
      },
      {
        path: RoutePath.passCard,
        lazy: async () => {
          const { PassCardPage } = await import("../../pages/Projects/ui");
          return { Component: PassCardPage };
        },
      },
      {
        path: RoutePath.vkCommunity,
        lazy: async () => {
          const { VkCommunityPage } = await import("../../pages/Projects/ui");
          return { Component: VkCommunityPage };
        },
      },
    ],
  },
  {
    element: <AppLayout />,
    path: RoutePath.about,
    children: [
      {
        lazy: async () => {
          const { About } = await import("../../pages/About/About");

          return { Component: About };
        },
        index: true,
      },
    ],
  },
  {
    element: <AppLayout />,
    path: RoutePath.contacts,
    children: [
      {
        lazy: async () => {
          const { Contacts } = await import("../../pages/Contacts/Contacts");

          return { Component: Contacts };
        },
        index: true,
      },
    ],
  },
  {
    element: <Navigate to={RoutePath.main} />,
    path: RoutePath.notFound,
  },
]);

export const AppRouter = () => (
  <Suspense fallback={<CircularProgress  />}>
    <RouterProvider router={router} />
  </Suspense>
);

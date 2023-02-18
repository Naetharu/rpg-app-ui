import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppShell, MantineProvider } from "@mantine/core";
import {
  Link,
  Outlet,
  ReactLocation,
  Router,
  Route,
} from "@tanstack/react-location";

import { Dashboard } from "./pages/Dashboard";
import { CharacterViewer } from "./pages/Characters/CharacterViewer";
import { CharacterDetail } from "./pages/Characters/CharacterDetail";
import { LocationViewer } from "./pages/Locations/LocationViewer";
import { CharacterCreator } from "./pages/Characters/CharacterCreator";
import { LocationCreator } from "./pages/Locations/LocationCreator";
import { LocationDetail } from "./pages/Locations/LocationDetail";
import { ItemCreator } from "./pages/Items/ItemCreator";
import { ItemDetail } from "./pages/Items/ItemDetail";
import { ItemViewer } from "./pages/Items/ItemViewer";
import { AppHeader } from "./components/organisms/AppHeader";
import { AppFooter } from "./components/organisms/AppFooter";
import { Campaigns } from "./pages/Campaign/Campaigns";
import { CampaignDetail } from "./pages/Campaign/CampaignDetail";

const links = [
  { link: "/", label: "Home" },
  { link: "/characters", label: "Characters" },
  { link: "/locations", label: "Locations" },
  { link: "/items", label: "Items" },
  { link: "/scenes", label: "Scenes" },
  { link: "/chapters", label: "Chapters" },
  { link: "/campaigns", label: "Campaigns" },
  { link: "/whiteboard", label: "Whiteboard" },
  { link: "/art", label: "Art" },
  { link: "/ideas", label: "Ideas" },
];

const location = new ReactLocation();

const routes: Route[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "characters",
    children: [
      { path: "/", element: <CharacterViewer /> },
      { path: "create", element: <CharacterCreator /> },
      { path: ":id", element: <CharacterDetail /> },
    ],
  },
  {
    path: "locations",
    children: [
      { path: "/", element: <LocationViewer /> },
      { path: "create", element: <LocationCreator /> },
      { path: ":id", element: <LocationDetail /> },
    ],
  },
  {
    path: "items",
    children: [
      { path: "/", element: <ItemViewer /> },
      { path: "create", element: <ItemCreator /> },
      { path: ":id", element: <ItemDetail /> },
    ],
  },
  {
    path: "campaigns",
    children: [
      { path: "/", element: <Campaigns /> },
      { path: "id", element: <CampaignDetail /> },
    ],
  },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Haffer, sans-serif",
        headings: { fontFamily: "Haffer, sans-serif" },
      }}
    >
      <Router location={location} routes={routes}>
        <AppShell
          header={
            <AppHeader links={links} location={location.current.pathname} />
          }
          footer={<AppFooter />}
        >
          <Outlet />
        </AppShell>
      </Router>
    </MantineProvider>
  </React.StrictMode>
);

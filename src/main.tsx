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
import { CharacterViewer } from "./pages/CharacterViewer";
import { CharacterDetail } from "./pages/CharacterDetail";
import { LocationViewer } from "./pages/LocationViewer";
import { CharacterCreator } from "./pages/CharacterCreator";
import { LocationCreator } from "./pages/LocationCreator";
import { LocationDetail } from "./pages/LocationDetail";
import { ItemCreator } from "./pages/ItemCreator";
import { ItemDetail } from "./pages/ItemDetail";
import { ItemViewer } from "./pages/ItemViewer";
import { AppHeader } from "./components/organisms/AppHeader";
import { AppFooter } from "./components/organisms/AppFooter";

const links = [
  { link: "/", label: "Home" },
  { link: "/characters", label: "Characters" },
  { link: "/locations", label: "Locations" },
  { link: "/items", label: "Items" },
  { link: "/scenes", label: "Scenes" },
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

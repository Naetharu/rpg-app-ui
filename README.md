# P&P RPG APP

This app is designed to support Games Masters in running pen & paper RPG games. It will allow them to create game-assets such as characters, locations, and items. And to
build those assets into campaigns.

## Campaign Structure

- Campaigns have many Adventures
- Adventures have many Chapters
- Chapters have many Scenes

The scene is the basic unit of the game. It is a single event for the players. Similar to how a scene works in a movie or book.

- Scenes have many characters.
- Scenes have many locations (normally one, but there are exceptions such as when running a split party)
- Scenes have many items.

Characters, Locations, and Items are created independantly of Campagins and added to the Encylopedia. They are then imported into
one or more Scenes in the Campaign.

It is important that the user is able to move between different parts of the app as smoothly as possible. For example:

- All Characters should be viewable in the Encylopedia. And sortable / filterable based on the Campaigns / Adventures / Scenes that they partake in.
- The same applies to Locations and Items.

# Technology for the App

The UI is written in React as a client side single-page application. It will make use of the following key packages / technologies:

- Vite: https://vitejs.dev/
- Mantine UI: https://mantine.dev/
- React Query: https://react-query-v3.tanstack.com/
- React Location: https://react-location.tanstack.com/
- Axios: https://axios-http.com/
- (more to be added...)

## Getting Started

- Take a copy of the repo from https://github.com/Naetharu/rpg-app-ui
- Open a command prompt at the top level and run "npm install" to install the dependancies
- Start the app in development mode with "npm run dev"
- It will run by default on port 5173 (standard for Vite)

## Structure of the App

Top level files inside SRC:

- api (All calls to the API handled in here via pure functions)
- assets (Assets such as fonts)
- components (Main JSX components in here)
- layouts (Layout components)
- lib (Helper functions such as authentication)
- pages (Main pages only - should not have JSX in them save for essencial layout)
- routes (Routes within the app)

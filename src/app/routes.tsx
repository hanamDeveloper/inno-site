import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Technology } from "./components/Technology";
import { Solutions } from "./components/Solutions";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "technology", Component: Technology },
      { path: "solutions", Component: Solutions },
      { path: "contact", Component: Contact },
    ],
  },
]);

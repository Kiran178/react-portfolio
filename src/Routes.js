import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Skills from "./screens/skills/Skills";
import Contact from "./screens/contact/Contact";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;

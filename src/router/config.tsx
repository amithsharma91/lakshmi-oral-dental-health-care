import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Services from "../pages/services/page";
import Gallery from "../pages/gallery/page";
import Testimonials from "../pages/testimonials/page";
import Contact from "../pages/contact/page";
import Ayurvedalya from "../pages/ayurvedalya/page";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/testimonials", element: <Testimonials /> },
  { path: "/contact", element: <Contact /> },
  { path: "/ayurvedalya", element: <Ayurvedalya /> },
  { path: "*", element: <NotFound /> },
];

export default routes;

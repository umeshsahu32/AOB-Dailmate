import { createBrowserRouter } from "react-router-dom";
import {
  HomeRoute,
  AboutUsRoute,
  CaseStudiesRoute,
  ContactRoute,
  NotFoundRoute,
  PrivacyRoute,
  ServicesRoute,
  TermsRoute,
} from "./index";
import { Layout } from "../layout/Layout";


export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/about-us",
        element: <AboutUsRoute />,
      },
      {
        path: "/case-studies",
        element: <CaseStudiesRoute />,
      },
      {
        path: "/contact-us",
        element: <ContactRoute />,
      },
      {
        path: "/privacy",
        element: <PrivacyRoute />,
      },
      {
        path: "/services",
        element: <ServicesRoute />,
      },
      {
        path: "/terms",
        element: <TermsRoute />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundRoute />,
  },
]);

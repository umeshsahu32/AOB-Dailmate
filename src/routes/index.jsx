import { lazy } from "react";

export const AboutUsRoute = lazy(()=> import("../pages/about-us"))
export const CaseStudiesRoute = lazy(()=> import("../pages/case-studies"))
export const ContactRoute = lazy(()=> import("../pages/contact-us"))
export const HomeRoute = lazy(()=> import("../pages/home"));
export const NotFoundRoute = lazy(()=> import("../pages/not-found"));
export const PrivacyRoute = lazy(()=> import("../pages/privacy"))
export const ServicesRoute = lazy(()=> import("../pages/services"));
export const TermsRoute = lazy(()=> import("../pages/terms"));

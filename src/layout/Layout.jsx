import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import Header from "../components/Header";
import Loader from "../components/Loader";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

export const Layout = () => {
  const location = useLocation();
  const isPrivacyPage = location.pathname === "/privacy";
  const isTermsPage = location.pathname === "/terms";

  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTop />
      {!isPrivacyPage && !isTermsPage && <Header />}
      <Outlet />
      <Footer />
      <GoToTop />
    </Suspense>
  );
};

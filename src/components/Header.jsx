import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/logos/dialforce_logo_3.png";
import phoneIcon from "../assets/icons/phone-icon.png";

import { getTitleAndHeroImage } from "../utils/helper";
import { socialLinks, navLinks, HEADER_DATA } from "../utils/data";

import styles from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);
  const burgerRef = useRef(null);

  const { pathname } = useLocation();
  const { title, subtitle, heroImage } = getTitleAndHeroImage(pathname);
  const navMenuRef = useRef(null);
  const linkRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

  const activeTo = useMemo(() => {
    const match = navLinks.find((item) =>
      item.to === "/"
        ? pathname === "/"
        : pathname === item.to || pathname.startsWith(`${item.to}/`)
    );
    return match?.to;
  }, [pathname]);

  useEffect(() => {
    if (!navMenuRef.current || !activeTo) {
      setIndicatorStyle({ width: 0, left: 0 });
      return;
    }

    const navRect = navMenuRef.current.getBoundingClientRect();
    const activeEl = linkRefs.current[activeTo];

    if (!activeEl) {
      setIndicatorStyle({ width: 0, left: 0 });
      return;
    }

    const activeRect = activeEl.getBoundingClientRect();
    setIndicatorStyle({
      width: activeRect.width,
      left: activeRect.left - navRect.left,
    });
  }, [activeTo, pathname]);

  useEffect(() => {
    const handleOutside = (e) => {
      if (
        open &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, [open]);

  return (
    <>
      {/* HEADER SECTION */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          {/* SOCIAL BAR */}
          <div className={styles.headerBar}>
            <div className={styles.phoneNumber}>
              <img src={phoneIcon} alt="Phone" /> {HEADER_DATA.PHONE}
            </div>

            <div className={styles.socialIcons}>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                >
                  <img src={item.icon} alt={item.label} />
                </a>
              ))}
            </div>
          </div>

          {/* NAV BAR */}
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <img src={logo} alt="Company Logo" />
            </div>

            <div className={styles.navMenu} ref={navMenuRef}>
              {navLinks.map((item) => {
                const isActive =
                  item.to === "/"
                    ? pathname === "/"
                    : pathname === item.to || pathname.startsWith(`${item.to}/`);

                return (
                  <Link
                    key={item.name}
                    to={item.to}
                    ref={(el) => {
                      if (el) linkRefs.current[item.to] = el;
                    }}
                    className={isActive ? styles.activeLink : ""}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <span
                className={`${styles.activeIndicator} ${
                  indicatorStyle.width ? styles.showIndicator : ""
                }`}
                style={{
                  width: `${indicatorStyle.width}px`,
                  transform: `translateX(${indicatorStyle.left}px)`,
                }}
              />
            </div>

            {/* HAMBURGER */}
            <div
              className={styles.hamburger}
              ref={burgerRef}
              onClick={() => setOpen(true)}
            >
              <svg viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </div>
          </nav>

          {/* HERO SECTION */}
          <div className={styles.hero}>
            <img src={heroImage} alt={title} />
            <div className={styles.heroContent}>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <div
        className={`${styles.sidebar} ${open ? styles.active : ""}`}
        ref={sidebarRef}
      >
        <div className={styles.sidebarClose} onClick={() => setOpen(false)}>
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </div>

        <div className={styles.sidebarContent}>
          <div className={styles.navMenu}>
            {navLinks.map((item) => {
              const isActive =
                item.to === "/"
                  ? pathname === "/"
                  : pathname === item.to || pathname.startsWith(`${item.to}/`);

              return (
                <Link
                  key={item.name}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={isActive ? styles.activeLink : ""}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div>
            <div className={styles.phoneNumber}>
              <img src={phoneIcon} alt="Phone" /> {HEADER_DATA.PHONE}
            </div>

            <div className={styles.socialIcons}>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  aria-label={item.label}
                >
                  <img src={item.icon} alt={item.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

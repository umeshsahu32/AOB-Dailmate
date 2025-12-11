import React, { useEffect, useRef } from "react";
import { HOME_CONSTANTS } from "../constants/home";

const ContactUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const applyStyles = () => {
      const wrappers = containerRef.current?.querySelectorAll(
        ".b24-form-wrapper, .b24-form-container, .b24-form-content"
      );
      wrappers?.forEach((el) => {
        el.style.setProperty("background", "transparent", "important");
        el.style.setProperty("width", "100%", "important");
        el.style.setProperty("maxWidth", "900px", "important");
        el.style.setProperty("margin", "0 auto", "important");
      });
    };

    // Only load once
    if (
      !containerRef.current?.querySelector(
        'script[src^="https://cdn.bitrix24.in/b30888757/crm/form/loader_97.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://cdn.bitrix24.in/b30888757/crm/form/loader_97.js" +
        "?" +
        ((Date.now() / 180000) | 0);
      script.setAttribute("data-b24-form", "inline/97/e03mnl");
      script.setAttribute("data-skip-moving", "true");
      containerRef.current?.appendChild(script);
    }

    const observer = new MutationObserver(applyStyles);
    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true });
    }
    const interval = setInterval(applyStyles, 200);
    const timeout = setTimeout(() => clearInterval(interval), 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="contact-us"
      style={{ backgroundColor: "#f8f0d4" }}
      className="px-4 flex flex-col items-center"
    >
      <h3 className="text-4xl pt-12 pb-8 font-bold text-center text-purple-700">
        {HOME_CONSTANTS.CONTACT_US.TITLE}
      </h3>

      <div className="w-full mx-auto min-h-[300px] pb-12">
        <div ref={containerRef} className="w-full" />
      </div>
    </section>
  );
};

export default ContactUs;

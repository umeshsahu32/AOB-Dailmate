import { useEffect, useRef } from "react";
import { CONTACT_US_DATA } from "../constants/contactUs";

const ContactSection = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  // Handle scroll to contact form when hash is present
  useEffect(() => {
    if (window.location.hash === "#contact-form" && sectionRef.current) {
      // Small delay to ensure page is fully rendered
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ 
          behavior: "smooth", 
          block: "start" 
        });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const applyStyles = () => {
      const wrappers = formRef.current?.querySelectorAll(
        ".b24-form-wrapper, .b24-form-container, .b24-form-content"
      );
      wrappers?.forEach((el) => {
        el.style.setProperty("background", "transparent", "important");
        el.style.setProperty("width", "100%", "important");
        el.style.setProperty("maxWidth", "900px", "important");
        el.style.setProperty("margin", "0 auto", "important");
      });
    };

    const existing = formRef.current?.querySelector(
      'script[src^="https://cdn.bitrix24.in/b30888757/crm/form/loader_97.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://cdn.bitrix24.in/b30888757/crm/form/loader_97.js" +
        "?" +
        ((Date.now() / 180000) | 0);
      script.setAttribute("data-b24-form", "inline/97/e03mnl");
      script.setAttribute("data-skip-moving", "true");
      formRef.current?.appendChild(script);
    }

    const observer = new MutationObserver(applyStyles);
    if (formRef.current) {
      observer.observe(formRef.current, { childList: true, subtree: true });
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
      id="contact-form" 
      ref={sectionRef}
      className="bg-[#f7f5fc] py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <span className="inline-flex text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {CONTACT_US_DATA.CONTACT_US}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {CONTACT_US_DATA.DESCRIPTION}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            {CONTACT_US_DATA.DESCRIPTION_CONTENT}
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1fr_0.9fr] gap-6 lg:gap-10 items-stretch">
          <div className="bg-white border border-purple-100 rounded-3xl shadow-lg p-6 sm:p-7 space-y-5 h-full flex flex-col">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                  {CONTACT_US_DATA.TALK_TO_US}
                </span>
                <span className="h-px flex-1 bg-purple-200" />
              </div>
              <h2 className="text-xl mt-5 sm:text-2xl font-bold text-gray-900">
                {CONTACT_US_DATA.TALK_TO_US_DESCRIPTION}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {CONTACT_US_DATA.TALK_TO_US_DESCRIPTION_CONTENT}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-purple-100 bg-[#fdfbff] p-4 shadow-sm">
                <p className="text-sm font-semibold text-purple-700">{CONTACT_US_DATA.CALL}</p>
                <p className="text-gray-900 font-semibold text-lg mt-1">
                  {CONTACT_US_DATA.CALL_NUMBER}
                </p>
                <p className="text-gray-600 text-sm mt-1">{CONTACT_US_DATA.CALL_TIME}</p>
              </div>
              <div className="rounded-2xl border border-purple-100 bg-[#fdfbff] p-4 shadow-sm">
                <p className="text-sm font-semibold text-purple-700">{CONTACT_US_DATA.EMAIL}</p>
                <p className="text-gray-900 font-semibold text-lg mt-1">
                  {CONTACT_US_DATA.EMAIL_ADDRESS}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {CONTACT_US_DATA.EMAIL_REPLY_TIME}
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-purple-200 bg-purple-50 p-4">
              <p className="text-sm font-semibold text-purple-800">
                {CONTACT_US_DATA.NEED_A_QUICK_BRIEF}
              </p>
              <p className="text-sm text-gray-800 mt-1">
                {CONTACT_US_DATA.NEED_A_QUICK_BRIEF_DESCRIPTION}
              </p>
            </div>
          </div>

          <div className="bg-white border border-purple-100 rounded-3xl shadow-lg p-4 sm:p-6 h-full flex flex-col">
            <div className="rounded-2xl border border-purple-100 bg-purple-50 px-4 py-3 mb-4">
              <p className="text-sm font-semibold text-purple-800">
                {CONTACT_US_DATA.DROP_YOUR_DETAILS}
              </p>
              <p className="text-sm text-gray-800">
                {CONTACT_US_DATA.DROP_YOUR_DETAILS_DESCRIPTION}
              </p>
            </div>
            <div ref={formRef} className="w-full min-h-[320px] flex-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

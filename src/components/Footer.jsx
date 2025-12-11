import logo from "../assets/dialforce_logo_1.png";
import { Link } from "react-router-dom";
import { navLinks as footerLinks , privacyAndTerms, FOOTER_DATA } from "../utils/data";

const Footer = () => {
  return (
    <footer className="w-full bg-linear-to-br from-[#e0c3fc] to-[#8ec5fc] text-[#222] px-4 sm:px-6 md:px-10 lg:px-[10%] py-12 sm:py-14 space-y-10">
      <div className="max-w-[900px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col gap-1 md:gap-2 text-left max-w-3xl">
          <h2 className="text-3xl sm:text-2.5xl font-semibold text-[#301c58] leading-tight">
            {FOOTER_DATA.YOUR_CUSTOMERS_DESERVE} <br />{" "}
            {FOOTER_DATA.THE_BEST_EXPERIENCE}
          </h2>
          <h3 className="text-3xl sm:text-3xl font-semibold text-[#6d3ae7] leading-tight">
            {FOOTER_DATA.WE_DELIVER_IT}
          </h3>
        </div>

        {/* Card */}
        <div className="mt-10 bg-linear-to-br from-[#e2dee6] to-[#cacfd479] rounded-2xl shadow-md p-6 sm:p-8 lg:p-10 flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 w-full">
            {/* Logo + email */}
            <div className="flex flex-col items-center lg:items-start gap-4 max-w-xs text-center lg:text-left shrink-0">
              <img
                src={logo}
                alt="Dialforce"
                className="w-52 sm:w-60 h-auto object-contain -ml-4 lg:ml-0"
              />
              <p className="text-base sm:text-lg">
                {FOOTER_DATA.EMAIL_TEXT}{" "}
                <a
                  href={`mailto:${FOOTER_DATA.EMAIL_LINK}`}
                  className="text-[#6d3ae7] font-semibold"
                >
                  {FOOTER_DATA.EMAIL_LINK}
                </a>
              </p>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col sm:flex-row gap-8">
              <div className="flex flex-col gap-3">
                {footerLinks.map(({ name, to }) => (
                  <Link
                    key={name}
                    to={to}
                    className="text-base text-[#444] hover:underline"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="w-full sm:w-auto flex justify-start lg:justify-end">
              <a
                href="#"
                className="inline-block bg-[#7b2ff7] hover:bg-[#6c26d8] text-white px-6 sm:px-7 py-3 rounded-xl font-semibold shadow-md transition"
              >
                {FOOTER_DATA.BOOK_A_DEMO}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 text-center text-sm text-[#555]">
          {FOOTER_DATA.COPYRIGHT} &nbsp;|&nbsp;{" "}
          {privacyAndTerms.map(({ name, to }) => (
            <span key={name}>
              <Link to={to} className="text-[#6d3ae7] hover:underline">
                {name}
              </Link>
              &nbsp;|&nbsp;
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

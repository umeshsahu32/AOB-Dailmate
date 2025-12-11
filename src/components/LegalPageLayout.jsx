import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import logo from "../assets/dialforce_logo_3.png";

const LegalPageLayout = ({ title, breadcrumbText, effectiveDate, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-purple-100">
      {/* Header Section */}
      <section className="bg-linear-to-r from-purple-600 to-purple-800 text-white py-8 sm:py-12 md:py-8">
        {/* Custom Navbar with Logo and Breadcrumb */}
        <nav className="sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="DialForce Logo"
                  className="h-8 sm:h-10 md:h-24 w-auto object-contain"
                />
              </Link>

              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
                <Link
                  to="/"
                  className="flex items-center gap-1.5 sm:gap-2 text-white-600 hover:underline"
                >
                  <FaHome className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
                <span className="text-white-400">/</span>
                <span className="text-white-800 font-medium">
                  {breadcrumbText}
                </span>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
            {title}
          </h1>
          <div className="text-center text-sm sm:text-base md:text-lg opacity-90">
            <p className="mb-2">Effective Date: {effectiveDate}</p>
            <p>Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {children}
        </div>
      </section>
    </div>
  );
};

export default LegalPageLayout;


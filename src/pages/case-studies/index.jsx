import { companyData } from "./constants/data";
import { FaBriefcase, FaTrophy, FaChartLine } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import HeaderSection from "./components/HeaderSection";
import { CASE_STUDY_DATA } from "./constants/CaseStudy";

const CaseStudies = () => {
  const { PURPOSE, ACHIEVEMENT, RESULT } = CASE_STUDY_DATA;
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-purple-400">
      {/* Hero Section */}
      <HeaderSection />
      {/* Case Studies Grid */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {companyData.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-purple-100 hover:border-purple-300 group flex flex-col"
              >
                {/* Card Header with Gradient */}
                <div className="bg-linear-to-r from-purple-600 to-purple-700 px-4 py-4 flex flex-col justify-between">
                  <h2 className="text-base sm:text-lg font-bold text-white line-clamp-2 leading-tight">
                    {company.name}
                  </h2>
                  <div className="flex items-center gap-2 text-purple-100 mt-2">
                    <FaBriefcase className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">
                      {company.industry}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 space-y-4 flex-1">
                  {/* Purpose */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-600">
                      <TbTargetArrow className="w-3.5 h-3.5 shrink-0" />
                      <h3 className="font-semibold text-xs sm:text-sm uppercase tracking-wide">
                        {PURPOSE}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed pl-5">
                      {company.purpose}
                    </p>
                  </div>

                  {/* Achievement */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-600">
                      <FaTrophy className="w-3.5 h-3.5 shrink-0" />
                      <h3 className="font-semibold text-xs sm:text-sm uppercase tracking-wide">
                        {ACHIEVEMENT}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed pl-5">
                      {company.achievement}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="space-y-1.5 pt-2 border-t border-purple-100">
                    <div className="flex items-center gap-2 text-purple-600">
                      <FaChartLine className="w-3.5 h-3.5 shrink-0" />
                      <h3 className="font-semibold text-xs sm:text-sm uppercase tracking-wide">
                        {RESULT}
                      </h3>
                    </div>
                    <p className="text-gray-800 text-xs sm:text-sm font-medium leading-relaxed pl-5 bg-linear-to-r from-purple-50 to-transparent p-2 rounded-md">
                      {company.result}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Indicator - Always at bottom */}
                <div className="h-1 bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;

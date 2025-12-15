import React from "react";
import { CASE_STUDY_DATA } from "../constants/CaseStudy";

const HeaderSection = () => {
  return (
    <section className="bg-[#f7f5fc] py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="space-y-3 text-center">
          <span className="inline-flex text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {CASE_STUDY_DATA.CASE_STUDY_TITLE}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {CASE_STUDY_DATA.REAL_RESULTS_REAL_SUCCESS_REAL_STORIES}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {CASE_STUDY_DATA.CASE_STUDY_DESCRIPTION}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;

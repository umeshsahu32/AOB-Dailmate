import { approach, businessImpact, differentiators } from "../constants/data";
import { WHAT_MAKES_DIALFORCE_SECTION_DATA } from "../constants/aboutUs";

const Pill = ({ text }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1">
    <span className="h-2 w-2 rounded-full bg-purple-600" />
    {text}
  </span>
);

const Bullet = ({ children }) => (
  <div className="flex items-start gap-3 text-gray-800 text-sm sm:text-base">
    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
      •
    </span>
    <span className="leading-relaxed">{children}</span>
  </div>
);

const WhatMakesDialforceSection = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#f7f5fc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="space-y-3">
          <span className="inline-flex text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {WHAT_MAKES_DIALFORCE_SECTION_DATA.WHAT_MAKES_DIALFORCE_DIFFERENT}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {WHAT_MAKES_DIALFORCE_SECTION_DATA.PEOPLE_TECHNOLOGY_PROCESS_BUILT_FOR_PREDICTABLE_OUTCOMES}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
            {WHAT_MAKES_DIALFORCE_SECTION_DATA.TELECALLING_IS_MORE_THAN_MAKING_CALLS_CONTENT}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-purple-100 rounded-2xl p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-200 flex flex-col gap-2"
            >
              <Pill text={item.title} />
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-start">
          <div className="bg-white rounded-3xl border border-purple-100 shadow-lg p-4 sm:p-6 space-y-5">
          <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
               {WHAT_MAKES_DIALFORCE_SECTION_DATA.OUR_APPROACH}
              </span>
              <span className="h-px flex-1 bg-purple-200" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">{WHAT_MAKES_DIALFORCE_SECTION_DATA.PEOPLE_TECHNOLOGY_PROCESS_BUILT_FOR_PREDICTABLE_OUTCOMES}</h3>
            <div className="grid grid-cols-1 gap-4">
              {approach.map((block) => (
                <div
                  key={block.title}
                  className="rounded-2xl border border-purple-100 bg-[#fdfbff] p-4 space-y-3 shadow-sm"
                >
                  <p className="text-sm font-semibold text-purple-700">
                    {block.title}
                  </p>
                  <div className="space-y-2">
                    {block.items.map((line) => (
                      <Bullet key={line}>{line}</Bullet>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-purple-700 via-purple-600 to-purple-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0%,transparent_30%),radial-gradient(circle_at_80%_0%,#ffffff_0%,transparent_28%)]" />
            <div className="relative space-y-4">
              <p className="text-sm font-semibold tracking-widest uppercase">
                {WHAT_MAKES_DIALFORCE_SECTION_DATA.THE_BUSINESS_IMPACT_WE_CREATE}
              </p>
              <h4 className="text-2xl font-bold leading-tight">
                {WHAT_MAKES_DIALFORCE_SECTION_DATA.SCALE_WITHOUT_THE_HEADACHES}
              </h4>
              <div className="space-y-8">
                {businessImpact.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 bg-white/10 border border-white/15 rounded-2xl px-4 py-3 shadow-md backdrop-blur-sm"
                  >
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                    <p className="text-sm sm:text-base text-purple-50 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesDialforceSection;

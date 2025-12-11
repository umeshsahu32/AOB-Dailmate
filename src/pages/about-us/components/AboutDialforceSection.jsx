import { values } from "../constants/data";
import { ABOUT_US_DATA } from "../constants/aboutUs";

const AboutDialforceSection = () => {
  return (
    <section className="bg-[#f7f5fc] py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-stretch">
          <div className="bg-white shadow-xl border border-purple-100 rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                {ABOUT_US_DATA.ABOUT_DIALFORCE}
              </span>
              <span className="h-px flex-1 bg-purple-200" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              {ABOUT_US_DATA.ABOUT_DIALFORCE_DESCRIPTION}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {ABOUT_US_DATA.ABOUT_DIALFORCE_CONTENT}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#f7f5fc] border border-purple-100 rounded-2xl p-4 shadow-sm">
                <p className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
                  {ABOUT_US_DATA.BUILT_FOR_SCALE}
                </p>
                <p className="text-gray-700 text-sm sm:text-base mt-2">
                  {ABOUT_US_DATA.BUILT_FOR_SCALE_DESCRIPTION}
                </p>
              </div>
              <div className="bg-[#f7f5fc] border border-purple-100 rounded-2xl p-4 shadow-sm">
                <p className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
                  {ABOUT_US_DATA.BUILT_FOR_CONTROL}
                </p>
                <p className="text-gray-700 text-sm sm:text-base mt-2">
                  {ABOUT_US_DATA.BUILT_FOR_CONTROL_DESCRIPTION}
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 shadow-xl text-white p-6 sm:p-8">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff_0%,_transparent_35%),_radial-gradient(circle_at_30%_40%,_#ffffff_0%,_transparent_25%)]" />
            <div className="relative space-y-4 sm:space-y-5">
              <p className="text-sm font-semibold tracking-widest uppercase">
                {ABOUT_US_DATA.MISSION}
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                {ABOUT_US_DATA.MISSION_DESCRIPTION}
              </h3>
              <p className="text-base sm:text-lg text-purple-50 leading-relaxed">
                {ABOUT_US_DATA.MISSION_CONTENT}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="backdrop-blur-sm bg-white/10 border border-white/15 rounded-2xl p-4 shadow-md">
                  <p className="text-sm font-semibold text-purple-100">
                    {ABOUT_US_DATA.AI_POWERED_CRM}
                  </p>
                  <p className="text-sm text-purple-50 mt-1">
                    {ABOUT_US_DATA.AI_POWERED_CRM_DESCRIPTION}
                  </p>
                </div>
                <div className="backdrop-blur-sm bg-white/10 border border-white/15 rounded-2xl p-4 shadow-md">
                  <p className="text-sm font-semibold text-purple-100">
                    {ABOUT_US_DATA.GSM_DIALER_STACK}
                  </p>
                  <p className="text-sm text-purple-50 mt-1">
                    {ABOUT_US_DATA.GSM_DIALER_STACK_DESCRIPTION}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-purple-100 rounded-3xl shadow-lg p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
              {ABOUT_US_DATA.OUR_VALUES}
            </h4>
            <span className="text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
              {ABOUT_US_DATA.THE_DIALFORCE_WAY}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group border border-purple-100 rounded-2xl p-5 shadow-sm bg-[#fdfbff] hover:-translate-y-1 hover:shadow-md transition duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center">
                    {value.title.charAt(0)}
                  </span>
                  <h5 className="text-lg font-semibold text-gray-900">
                    {value.title}
                  </h5>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mt-3 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-purple-100 bg-gradient-to-r from-purple-50 via-white to-purple-50 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-2xl bg-purple-700 text-white font-bold text-xl flex items-center justify-center shadow-lg">
                {ABOUT_US_DATA.DF_LOGO}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wide text-purple-700 uppercase">
                {ABOUT_US_DATA.EXECUTION_PROMISE}
              </p>
              <p className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
                {ABOUT_US_DATA.EXECUTION_PROMISE_DESCRIPTION}
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                {ABOUT_US_DATA.EXECUTION_PROMISE_CONTENT}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDialforceSection;

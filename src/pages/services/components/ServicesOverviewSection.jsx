import { capabilities, inclusions } from "../constants/data";
import { SERVICES_OVERVIEW_DATA } from "../constants/services";

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3 text-gray-800 text-sm sm:text-base">
    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
      {SERVICES_OVERVIEW_DATA.BULLET_POINT}
    </span>
    <span className="leading-relaxed">{children}</span>
  </li>
);

const ServicesOverviewSection = () => {
  return (
    <section className="bg-[#f7f5fc] py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="space-y-3 text-center">
          <span className="inline-flex text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {SERVICES_OVERVIEW_DATA.SERVICES_TITLE}
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {SERVICES_OVERVIEW_DATA.SERVICES_DESCRIPTION}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {SERVICES_OVERVIEW_DATA.SERVICES_DESCRIPTION_CONTENT}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-10 items-start">
          <div className="bg-white border border-purple-100 rounded-3xl shadow-lg p-6 sm:p-8 space-y-5">
            <div className="space-y-3">
              <span className="inline-flex text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                {SERVICES_OVERVIEW_DATA.WHAT_WE_DO}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                {SERVICES_OVERVIEW_DATA.END_TO_END_TELECALLING}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {SERVICES_OVERVIEW_DATA.END_TO_END_TELECALLING_DESCRIPTION}
              </p>
            </div>
            <div className="rounded-2xl border border-purple-100 bg-[#fdfbff] p-5 shadow-sm space-y-3">
              <p className="text-sm font-semibold text-purple-700 uppercase tracking-wide">{SERVICES_OVERVIEW_DATA.OUR_CORE_TELECALLING_CAPABILITIES}</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {capabilities.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-linear-to-br from-purple-700 via-purple-600 to-purple-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0%,transparent_30%),radial-gradient(circle_at_80%_0%,#ffffff_0%,transparent_28%)]" />
            <div className="relative space-y-4 sm:space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold tracking-wide bg-white/15 text-white px-3 py-1 rounded-full">
                  {SERVICES_OVERVIEW_DATA.ALL_SERVICES_INCLUDE}
                </span>
                <span className="h-px flex-1 bg-white/30" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">{SERVICES_OVERVIEW_DATA.PLUG_AND_PLAY_STACK_FOR_TRANSPARENT_EXECUTION}</h3>
              <p className="text-base sm:text-lg text-purple-50 leading-relaxed">
                {SERVICES_OVERVIEW_DATA.PLUG_AND_PLAY_STACK_FOR_TRANSPARENT_EXECUTION_DESCRIPTION}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {inclusions.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-white/10 border border-white/15 rounded-2xl px-4 py-3 shadow-md backdrop-blur-sm"
                  >
                    <span className="mt-2 inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                    <p className="text-sm sm:text-base text-purple-50 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/15 px-4 py-3 shadow-md backdrop-blur-sm">
                <p className="text-sm text-purple-50 leading-relaxed">
                  {SERVICES_OVERVIEW_DATA.GET_PREDICTABLE_TEXT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;


import { industries, painPoints } from "../constants/data";
import { OUR_JOURNEY_DATA } from "../constants/aboutUs";

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3 text-gray-800 text-sm sm:text-base">
    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
     {OUR_JOURNEY_DATA.BULLET_POINT}
    </span>
    <span className="leading-relaxed">{children}</span>
  </li>
);

const OurJourneySection = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="space-y-3">
          <span className="inline-flex text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {OUR_JOURNEY_DATA.OUR_JOURNEY}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {OUR_JOURNEY_DATA.OUR_JOURNEY_DESCRIPTION}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
            {OUR_JOURNEY_DATA.OUR_JOURNEY_CONTENT}
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10">
          <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0%,transparent_30%),radial-gradient(circle_at_80%_0%,#ffffff_0%,transparent_28%)]" />
            <div className="relative space-y-4 sm:space-y-5">
              <p className="text-sm font-semibold tracking-widest uppercase">{OUR_JOURNEY_DATA.WHY_WE_EXIST}</p>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                {OUR_JOURNEY_DATA.WHY_WE_EXIST_DESCRIPTION}
              </h3>
              <p className="text-base sm:text-lg text-purple-50 leading-relaxed">
                {OUR_JOURNEY_DATA.WHY_WE_EXIST_CONTENT}
              </p>
              <div className="backdrop-blur-sm bg-white/10 border border-white/15 rounded-2xl p-4 shadow-lg space-y-2">
                <p className="text-sm font-semibold text-purple-100">{OUR_JOURNEY_DATA.OUR_REBUILD}</p>
                <p className="text-sm sm:text-base text-purple-50">
                  {OUR_JOURNEY_DATA.OUR_REBUILD_DESCRIPTION}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white border border-purple-100 rounded-3xl p-6 sm:p-4 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-2xl bg-purple-100 text-purple-700 font-bold flex items-center justify-center shadow-sm">
                  {OUR_JOURNEY_DATA.TRADITIONAL_SETUPS_STRUGGLED_WITH_NUMBER}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{OUR_JOURNEY_DATA.TRADITIONAL_SETUPS_STRUGGLED_WITH}</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {painPoints.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </div>
            </div>

            <div className="bg-[#f7f5fc] border border-purple-100 rounded-3xl p-6 sm:p-4 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-2xl bg-purple-700 text-white font-bold flex items-center justify-center shadow-sm">
                  {OUR_JOURNEY_DATA.TODAY_DIALFORCE_POWERS_NUMBER}
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{OUR_JOURNEY_DATA.TODAY_DIALFORCE_POWERS}</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {industries.map((item) => (
                <Bullet key={item}>{item}</Bullet>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourneySection;


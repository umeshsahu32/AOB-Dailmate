import {
  allocation,
  quality,
  compliance,
  crm,
  dialer,
  analytics,
} from "../constants/data";
import { SERVICES_QUALITY_AND_TECH_DATA } from "../constants/services";

const Bullet = ({ children, light = false }) => (
  <li
    className={`flex items-start gap-3 text-sm sm:text-base ${
      light ? "text-purple-50" : "text-gray-800"
    } leading-relaxed`}
  >
    <span
      className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold ${
        light ? "bg-white/20 text-white" : "bg-purple-100 text-purple-700"
      }`}
    >
     {SERVICES_QUALITY_AND_TECH_DATA.BULLET_POINT}
    </span>
    <span>{children}</span>
  </li>
);

const QualityAndTechSection = () => {
  return (
    <section className="bg-[#ffffff] py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="space-y-3 text-center">
          <span className="inline-flex text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {SERVICES_QUALITY_AND_TECH_DATA.QUALITY_AND_TECH_TITLE}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {SERVICES_QUALITY_AND_TECH_DATA.QUALITY_AND_TECH_DESCRIPTION}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {
              SERVICES_QUALITY_AND_TECH_DATA.QUALITY_AND_TECH_DESCRIPTION_CONTENT
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-10 items-start">
          <div className="bg-white border border-purple-100 rounded-3xl shadow-lg p-6 sm:p-8 space-y-5 h-full flex flex-col">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-purple-700 uppercase">
                  {SERVICES_QUALITY_AND_TECH_DATA.TELECALLER_ALLOCATION}
                </p>
                <ul className="space-y-2">
                  {allocation.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-purple-700 uppercase">
                  {SERVICES_QUALITY_AND_TECH_DATA.QUALITY_MONITORING}
                </p>
                <ul className="space-y-2">
                  {quality.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-purple-700 uppercase">
                  {SERVICES_QUALITY_AND_TECH_DATA.WORKING_HOURS_AND_COMPLIANCE}
                </p>
                <ul className="space-y-2">
                  {compliance.map((item) => (
                    <Bullet key={item}>{item}</Bullet>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-purple-200 bg-purple-50 p-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-purple-800 bg-purple-100 px-3 py-1 rounded-full">
                  {SERVICES_QUALITY_AND_TECH_DATA.TRUST_AND_CONTINUITY}
                </span>
                <span className="h-px flex-1 bg-purple-200" />
              </div>
              <p className="text-sm font-semibold text-black-800">
                {SERVICES_QUALITY_AND_TECH_DATA.TRANSPARENCY_AND_CONTINUITY_DESCRIPTION }
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                {
                  SERVICES_QUALITY_AND_TECH_DATA.TRUST_AND_CONTINUITY_DESCRIPTION_CONTENT
                }
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                {
                  SERVICES_QUALITY_AND_TECH_DATA.TRANSPARENCY_AND_CONTINUITY_DESCRIPTION_CONTENT
                }
              </p>
            </div>
          </div>

          <div className="bg-linear-to-br from-purple-700 via-purple-600 to-purple-500 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0%,transparent_30%),radial-gradient(circle_at_80%_0%,#ffffff_0%,transparent_28%)]" />
            <div className="relative space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold bg-white/15 text-white px-3 py-1 rounded-full">
                  {SERVICES_QUALITY_AND_TECH_DATA.TECHNOLOGY}
                </span>
                <span className="h-px flex-1 bg-white/30" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                {SERVICES_QUALITY_AND_TECH_DATA.TECHNOLOGY_BEHIND_DIALFORCE}
              </h3>
              <p className="text-sm sm:text-base text-purple-50 leading-relaxed">
                {SERVICES_QUALITY_AND_TECH_DATA.TECHNOLOGY_DESCRIPTION}
              </p>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 space-y-3 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white uppercase">
                  {SERVICES_QUALITY_AND_TECH_DATA.CRM}:{" "}
                  {SERVICES_QUALITY_AND_TECH_DATA.BITRIX24}
                </p>
                <ul className="space-y-2">
                  {crm.map((item) => (
                    <Bullet key={item} light>
                      {item}
                    </Bullet>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 space-y-3 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white uppercase">
                  {SERVICES_QUALITY_AND_TECH_DATA.DIALER}:{" "}
                  {SERVICES_QUALITY_AND_TECH_DATA.RUNO_GSM_DIALER}
                </p>
                <ul className="space-y-2">
                  {dialer.map((item) => (
                    <Bullet key={item} light>
                      {item}
                    </Bullet>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 space-y-3 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white uppercase">
                  {SERVICES_QUALITY_AND_TECH_DATA.AI_POWERED_ANALYTICS}
                </p>
                <ul className="space-y-2">
                  {analytics.map((item) => (
                    <Bullet key={item} light>
                      {item}
                    </Bullet>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityAndTechSection;

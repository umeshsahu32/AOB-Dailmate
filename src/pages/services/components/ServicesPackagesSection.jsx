import { packages } from "../constants/data";
import { SERVICES_PACKAGES_DATA } from "../constants/services";

const Badge = ({ children }) => (
  <span className="inline-flex text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
    {children}
  </span>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white text-xs font-semibold px-3 py-1 border border-white/20">
    <span className="h-2 w-2 rounded-full bg-white" />
    {children}
  </span>
);

const Bullet = ({ children, light }) => (
  <li className={`flex items-start gap-3 text-sm sm:text-base ${light ? "text-purple-50" : "text-gray-800"}`}>
    <span
      className={`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full ${
        light ? "bg-white/15 text-white" : "bg-purple-100 text-purple-700"
      } text-xs font-semibold`}
    >
      {SERVICES_PACKAGES_DATA.BULLET_POINT}
    </span>
    <span className="leading-relaxed">{children}</span>
  </li>
);

const PackageCard = ({ pkg }) => {
  const isPrimary = pkg.id === "ultracall";

  return (
    <div
      className={`rounded-3xl border shadow-lg overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-xl ${
        isPrimary ? "bg-linear-to-br from-purple-700 via-purple-600 to-purple-500 border-purple-500 text-white" : "bg-white border-purple-100"
      }`}
    >
      <div className={`p-6 sm:p-7 space-y-4 ${isPrimary ? "relative" : ""}`}>
        {isPrimary && (
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_20%,#ffffff_0%,transparent_30%),radial-gradient(circle_at_80%_0%,#ffffff_0%,transparent_28%)]" />
        )}
        <div className="relative flex items-center gap-3 flex-wrap">
          <Badge>{pkg.badge}</Badge>
          <span className={`${isPrimary ? "text-purple-50" : "text-purple-700"} text-xs font-semibold`}>
            {pkg.perfectFor}
          </span>
        </div>
        <div className="relative space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold leading-tight">{pkg.name}</h3>
          <p className={`${isPrimary ? "text-purple-50" : "text-gray-700"} text-sm sm:text-base leading-relaxed`}>
            {pkg.summary}
          </p>
        </div>
        <div
          className={`relative rounded-2xl p-5 border ${
            isPrimary ? "border-white/20 bg-white/10" : "border-purple-100 bg-[#fdfbff]"
          } space-y-3`}
        >
          <p className={`text-sm font-semibold ${isPrimary ? "text-white" : "text-purple-700"} uppercase tracking-wide`}>
            {SERVICES_PACKAGES_DATA.WHAT_YOU_GET}
          </p>
          <ul className="space-y-2">
            {pkg.whatYouGet.map((item) => (
              <Bullet key={item} light={isPrimary}>
                {item}
              </Bullet>
            ))}
          </ul>
        </div>
        <div
          className={`relative rounded-2xl p-5 border ${
            isPrimary ? "border-white/20 bg-white/10" : "border-purple-100 bg-white"
          } space-y-3`}
        >
          <div className="flex items-center gap-3 flex-wrap">
            {isPrimary ? (
              <Pill>{SERVICES_PACKAGES_DATA.UNLIMITED_CALLING}</Pill>
            ) : (
              <Badge>{SERVICES_PACKAGES_DATA.BILLING}</Badge>
            )}
            <span className={`${isPrimary ? "text-purple-50" : "text-purple-700"} text-xs font-semibold`}>
              {SERVICES_PACKAGES_DATA.BILLING_AND_TERMS}
            </span>
          </div>
          <ul className="space-y-2">
            {pkg.billing.map((item) => (
              <Bullet key={item} light={isPrimary}>
                {item}
              </Bullet>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ServicesPackagesSection = () => {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="space-y-3 text-center">
          <span className="inline-flex text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {SERVICES_PACKAGES_DATA.PACKAGES}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">{SERVICES_PACKAGES_DATA.OUR_TELECALLING_PACKAGES}</h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {SERVICES_PACKAGES_DATA.OUR_TELECALLING_PACKAGES_DESCRIPTION}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPackagesSection;


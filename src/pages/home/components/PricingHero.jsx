import { HOME_CONSTANTS } from "../constants/home";

const PricingHero = () => {
  const { TITLE, SUBTITLE } = HOME_CONSTANTS.PRICING_HERO;

  return (
    <section className="w-full bg-teal-400 text-center py-10 sm:py-12 md:py-14 px-4">
      <div className="max-w-6xl mx-auto space-y-2 sm:space-y-3">
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900">
          {TITLE}
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-700 leading-tight">
          {SUBTITLE}
        </h2>
      </div>
    </section>
  );
};

export default PricingHero;


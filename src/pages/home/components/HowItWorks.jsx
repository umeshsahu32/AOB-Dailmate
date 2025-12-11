import { HOME_CONSTANTS } from "../constants/home";

const HowItWorks = () => {
  const { TITLE, SUBTITLE, DISCOVERY_CALL, STEPS } = HOME_CONSTANTS.HOW_IT_WORKS;

  return (
    <section className="bg-[#f7f5fc] py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left Section - Text Content */}
          <div className="space-y-4 lg:sticky lg:top-8 lg:basis-[35%] lg:max-w-[35%] shrink-0">
            <h2 className="text-xl mb-0 font-normal text-black">
              {TITLE}
            </h2>
            
            <h3 className="text-3xl mb-0 font-bold text-black">
              {SUBTITLE}
            </h3>

            <div className="space-y-2 pt-8">
              <h4 className="text-3xl font-bold text-purple-600">
                {DISCOVERY_CALL.TITLE}
              </h4>
              <p className="text-gray-600 text-base sm:text-lg max-w-[70%]">
                {DISCOVERY_CALL.DESCRIPTION}
              </p>
            </div>
          </div>

          {/* Right Section - Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:basis-[65%] lg:max-w-[65%]">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-2 sm:p-4 hover:shadow-lg hover:translate-y-[-12px] transition-all duration-300"
              >
                <h5 className="text-purple-600 font-bold text-base sm:text-lg leading-tight mb-2">
                  {step.TITLE}
                </h5>
                <p className="text-gray-600 text-sm sm:text-base leading-tight mt-0">
                  {step.DESCRIPTION}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


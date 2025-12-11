import offerImage from "../../../assets/offer-img-2.png";
import { HOME_CONSTANTS } from "../constants/home";

const WhatWeOffer = () => {
  const { TITLE, DESCRIPTION, FEATURES, BULLET_POINT } = HOME_CONSTANTS.WHAT_WE_OFFER;
  return (
    <section className="bg-[#f8f0d4] py-0 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 h-auto lg:h-[370px]">
      <div className="max-w-7xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 h-full">
          {/* Left Section - Text Content */}
          <div className="flex flex-col justify-center py-5 lg:h-full">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">
                {TITLE}
              </h2>
              
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {DESCRIPTION}
              </p>

              <ul className="space-y-1.5 pt-1">
                {FEATURES.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-purple-600 font-bold text-base mt-0.5">{BULLET_POINT}</span>
                    <span className="text-gray-700 text-sm sm:text-base flex-1">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative w-full bg-[#f8f0d4] lg:h-[370px] h-auto">
            <img
              src={offerImage}
              alt="Dialforce Services"
              className="w-full h-auto lg:h-full object-contain object-bottom block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;


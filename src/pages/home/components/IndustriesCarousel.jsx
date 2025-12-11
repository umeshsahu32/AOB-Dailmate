import { useMemo, useState } from "react";
import { HOME_CONSTANTS } from "../constants/home";
import { industriesData } from "../helper/IndustriesData";
import { getCardStyle } from "../../../utils/helper";

const IndustriesCarousel = () => {
  const { TITLE } = HOME_CONSTANTS.INDUSTRIES;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = useMemo(() => industriesData[activeIndex], [activeIndex]);

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1200px] mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-purple-700">
          {TITLE}
        </h2>

        {/* Pills */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 overflow-x-auto max-w-[900px] mx-auto">
          {industriesData.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`whitespace-nowrap rounded-full hover:cursor-pointer px-4 sm:px-5 py-2 text-sm sm:text-base font-medium transition ${
                  isActive
                    ? "text-purple-700 bg-linear-to-r from-[#ffe5d9] to-[#f0d7ff] shadow-sm"
                    : "bg-gray-200/70 text-slate-800 hover:bg-gray-200"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Desktop / Tablet layered carousel */}
        <div className="hidden md:block relative h-[440px] mt-4">
          <div className="relative h-full w-full flex items-center justify-center">
            {industriesData.map((item, idx) => {
              const style = getCardStyle(
                idx,
                activeIndex,
                industriesData.length
              );
              return (
                <div
                  key={item.id}
                  style={style}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto w-full max-w-[600px] rounded-3xl bg-linear-to-br from-[#7a5cf6] via-[#7c6af0] to-[#b394ff] border border-white/60 transition-all duration-500 ease-in-out overflow-hidden"
                >
                  <div className="h-full w-full flex flex-col gap-6 lg:gap-8 p-6 lg:p-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 min-w-12 flex items-center justify-center rounded-xl border border-white/70 bg-white/10 backdrop-blur">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-8 h-8 object-contain filter invert"
                        />
                      </div>
                      <h3 className="text-white text-2xl lg:text-3xl font-semibold">
                        {item.title}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-3 lg:gap-4">
                      {item.services.map((service) => (
                        <li
                          key={service}
                          className="bg-white text-gray-800 border border-[#ffe5d9] rounded-full px-4 py-2 text-sm lg:text-base shadow-sm"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile single card */}
        <div className="md:hidden">
          <div className="rounded-3xl min-h-[300px] bg-linear-to-br from-[#7a5cf6] via-[#7c6af0] to-[#b394ff] border border-white/60 shadow-lg overflow-hidden">
            <div className="w-full flex flex-col gap-4 p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 min-w-10 flex items-center justify-center rounded-xl border border-white/70 bg-white/10 backdrop-blur">
                  <img
                    src={activeSlide.icon}
                    alt={activeSlide.title}
                    className="w-7 h-7 object-contain filter invert"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold">
                  {activeSlide.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {activeSlide.services.map((service) => (
                  <li
                    key={service}
                    className="bg-white text-gray-800 border border-[#ffe5d9] rounded-full px-3 py-1.5 text-sm shadow-sm"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCarousel;

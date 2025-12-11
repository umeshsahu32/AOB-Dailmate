import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HOME_CONSTANTS } from "../constants/home";
import image1 from "../../../assets/carousel-images/df-1.jpg";
import image2 from "../../../assets/carousel-images/df-2.jpg";
import image3 from "../../../assets/carousel-images/df-3.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  const images = [image1, image2, image3];
  const totalSlides = images.length;

  // Shared classes
  const navButtonClass = "absolute top-1/2 -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12";
  const iconClass = "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6";

  const resetAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const goToSlide = (direction) => {
    setCurrentIndex((prev) => {
      if (direction === 'next') {
        return prev >= totalSlides - 1 ? 0 : prev + 1;
      }
      return prev <= 0 ? totalSlides - 1 : prev - 1;
    });
    resetAutoSlide();
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalSlides]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="carousel-section w-full py-6 px-2 sm:py-8 sm:px-4 md:py-10 md:px-6 lg:py-12 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-600 mb-4 sm:mb-6 md:mb-8 font-['Raleway',sans-serif]">
          {HOME_CONSTANTS.CAROUSEL.TITLE}
        </h3>

        <div className="relative w-full overflow-hidden">
          <button
            onClick={() => goToSlide('prev')}
            className={`${navButtonClass} left-1 sm:left-2 md:left-4 lg:left-6`}
            aria-label="Previous slide"
          >
            <FaChevronLeft className={iconClass} />
          </button>

          <button
            onClick={() => goToSlide('next')}
            className={`${navButtonClass} right-1 sm:right-2 md:right-4 lg:right-6`}
            aria-label="Next slide"
          >
            <FaChevronRight className={iconClass} />
          </button>

          <div className="relative w-full h-auto overflow-hidden">
            <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out w-full">
              {images.map((image, index) => (
                <div key={index} className="shrink-0 w-full" style={{ minWidth: '100%', maxWidth: '100%' }}>
                  <div className="px-8 sm:px-10 md:px-14 lg:px-16 xl:px-20">
                    <img
                      src={image}
                      alt={`Trusted Business Logo ${index + 1}`}
                      className="w-full h-auto object-contain max-h-[70px] sm:max-h-[80px] md:max-h-[100px] lg:max-h-[120px] xl:max-h-[200px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                resetAutoSlide();
              }}
              className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-purple-600 w-6 sm:w-8 md:w-10"
                  : "bg-gray-300 hover:bg-gray-400 w-2 sm:w-2.5 md:w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

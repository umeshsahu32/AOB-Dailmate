import Carousel from "./components/Carousel";
import PricingTable from "./components/PricingTable";
import WhatWeOffer from "./components/WhatWeOffer";
import Comparison from "./components/Comparison";
import HowItWorks from "./components/HowItWorks";
import PricingHero from "./components/PricingHero";
import IndustriesCarousel from "./components/IndustriesCarousel";
import ContactUs from "./components/ContactUs";

const Home = () => {
 return(
  <div>
    <Carousel />
    <PricingTable />
    <WhatWeOffer />
    <HowItWorks />
    <Comparison />
    <PricingHero />
    <IndustriesCarousel />
    <ContactUs />
  </div>
 )
};

export default Home;

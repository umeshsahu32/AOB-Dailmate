import homeBanner from "../assets/banners/home.png";
import aboutBanner from "../assets/banners/about-us.png";
import servicesBanner from "../assets/banners/services.png";
import caseStudiesBanner from "../assets/banners/case-study.png";
import contactBanner from "../assets/banners/case-study.png";

export const getTitleAndHeroImage = (pathname) => {
    switch (pathname) {
      case "/":
        return {
          title: "Enterprise-Grade Telecalling for Startups & Small Businesses",
          subtitle: "Set up your pre-sales or support teams in 24 hours.",
          heroImage: homeBanner,
        };
      case "/about-us":
        return {
          title: "We’re DialForce: A Modern B2B Telecalling Company",
          subtitle: "Built to deliver scalable, reliable, and performance-driven calling solutions.",
          heroImage: aboutBanner,
        };
      case "/services":
        return {
          title: "Our Complete Stack of Telecalling Solutions",
          subtitle: "From lead qualification to conversions, managed end to end.",
          heroImage: servicesBanner,
        };
      case "/case-studies":
        return {
          title: "Real Businesses. Real Conversations. Real Results.",
          subtitle:
            "See how teams across industries scale faster with DialForce.",
          heroImage: caseStudiesBanner,
        };
      case "/contact-us":
        return {
          title: "Let’s Talk. Your Growth Starts With a Conversation.",
          subtitle: "Connect with our experts to design your ideal calling setup.",
          heroImage: contactBanner,
        };
      default:
        return {
          title: "Enterprise-Grade Telecalling for Startups & Small Businesses",
          subtitle: "Set up your pre-sales or support teams in 24 hours.",
          heroImage: homeBanner,
        };
    }
  };

  export const getCardStyle = (index, activeIndex, total) => {
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) diff -= total;
  
    if (diff === 0) {
      return {
        transform: "translate3d(0,0,0) scale(1)",
        zIndex: 30,
        opacity: 1,
        boxShadow: "0 13px 25px 0 rgba(0,0,0,0.3), 0 11px 7px 0 rgba(0,0,0,0.19)",
        height: "440px",
      };
    }
    if (Math.abs(diff) === 1) {
      return {
        transform: `translate3d(${diff * 10}%, 0, -60px) scale(0.96)`,
        zIndex: 20,
        opacity: 0.75,
        boxShadow: "0 6px 10px 0 rgba(0,0,0,0.25)",
        height: "380px",
      };
    }
    if (Math.abs(diff) === 2) {
      return {
        transform: `translate3d(${diff * 10}%, 0, -120px) scale(0.9)`,
        zIndex: 10,
        opacity: 0.55,
        boxShadow: "0 3px 6px 0 rgba(0,0,0,0.15)",
        height: "340px",
      };
    }
    return { opacity: 0, pointerEvents: "none" };
  };
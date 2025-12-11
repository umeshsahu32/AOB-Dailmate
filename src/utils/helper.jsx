import heroImage from "../assets/girl_3.png";

export const getTitleAndHeroImage = (pathname) => {
    switch (pathname) {
      case "/":
        return {
          title: "Enterprise-Grade Telecalling for Startups & Small Businesses",
          subtitle: "Set up your pre-sales or support teams in 24 hours.",
          heroImage: heroImage,
        };
      case "/about-us":
        return {
          title: "We’re Dialforce: A B2B Telecalling Company",
          subtitle: "Your trusted partner for B2B telecalling services",
          heroImage: heroImage,
        };
      case "/services":
        return {
          title: "Our Complete Stack",
          subtitle: "Our complete stack of tools and services",
          heroImage: heroImage,
        };
      case "/case-studies":
        return {
          title: "Our Customers Love Us",
          subtitle:
            "Hear from our customers about their experience with Dialforce",
          heroImage: heroImage,
        };
      case "/contact-us":
        return {
          title: "Let’s Talk: Your Success Is Our Mission",
          subtitle: "Let’s talk about how we can help you achieve your goals",
          heroImage: heroImage,
        };
      default:
        return {
          title: "Enterprise-Grade Telecalling for Startups & Small Businesses",
          subtitle: "Set up your pre-sales or support teams in 24 hours.",
          heroImage: heroImage,
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
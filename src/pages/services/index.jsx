import ServicesOverviewSection from "./components/ServicesOverviewSection";
import ServicesPackagesSection from "./components/ServicesPackagesSection";
import CampaignWorkflowSection from "./components/CampaignWorkflowSection";
import QualityAndTechSection from "./components/QualityAndTechSection";

const Services = () => {
  return (
    <div>
      <ServicesOverviewSection />
      <ServicesPackagesSection />
      <CampaignWorkflowSection />
      <QualityAndTechSection />
    </div>
  );
};

export default Services;
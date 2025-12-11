import { steps } from "../constants/data";
import { SERVICES_WORKFLOW_DATA } from "../constants/services";

const StepCard = ({ step, index }) => {
  const isEven = index % 2 === 1;
  return (
    <div
      className={`flex flex-col gap-3 rounded-3xl border shadow-md p-5 sm:p-6 ${
        isEven
          ? "bg-linear-to-r from-purple-700 via-purple-600 to-purple-500 text-white border-purple-400"
          : "bg-white border-purple-100"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`h-10 w-10 rounded-2xl font-semibold text-lg flex items-center justify-center shadow-sm ${
            isEven ? "bg-white/20 text-white" : "bg-purple-100 text-purple-700"
          }`}
        >
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </span>
        <h3
          className={`text-lg sm:text-xl font-bold ${
            isEven ? "text-white" : "text-gray-900"
          }`}
        >
          {step.title}
        </h3>
      </div>
      <p
        className={`text-sm sm:text-base leading-relaxed ${
          isEven ? "text-purple-50" : "text-gray-800"
        }`}
      >
        {step.description}
      </p>
    </div>
  );
};

const CampaignWorkflowSection = () => {
  const { WORKFLOW_TITLE, WORKFLOW_DESCRIPTION, WORKFLOW_DESCRIPTION_CONTENT } =
    SERVICES_WORKFLOW_DATA;

  return (
    <section className="bg-[#f7f5fc] py-14 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="space-y-3 text-center">
          <span className="inline-flex text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {WORKFLOW_TITLE}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {WORKFLOW_DESCRIPTION}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {WORKFLOW_DESCRIPTION_CONTENT}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {steps.map((step, idx) => (
            <StepCard key={step.title} step={step} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignWorkflowSection;

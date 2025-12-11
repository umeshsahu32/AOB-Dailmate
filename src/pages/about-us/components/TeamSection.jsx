import { teamMembers } from "../constants/data";
import { TEAM_SECTION_DATA } from "../constants/aboutUs";

const TeamCard = ({ member }) => (
  <div className="bg-white border border-purple-100 rounded-3xl p-5 sm:p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition duration-200 flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <div className="h-16 w-16 rounded-2xl overflow-hidden border border-purple-100 shadow-sm">
        <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-900">{member.name}</p>
        <p className="text-sm font-medium text-purple-700">{member.role}</p>
      </div>
    </div>
    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{member.description}</p>
    <div className="rounded-2xl bg-[#f7f5fc] border border-purple-100 p-4">
      <p className="text-sm text-gray-800 leading-relaxed">{member.highlight}</p>
    </div>
  </div>
);

const TeamSection = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        <div className="space-y-3">
          <span className="inline-flex text-xs font-semibold tracking-wide text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
            {TEAM_SECTION_DATA.MEET_THE_TEAM_BEHIND_DIALFORCE}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            {TEAM_SECTION_DATA.LEADERSHIP_THAT_BLENDS_STRATEGY}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl">
            {TEAM_SECTION_DATA.THE_CORE_TEAM_DESCRIPTION}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;


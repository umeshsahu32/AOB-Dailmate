import { HOME_CONSTANTS } from "../constants/home";

const Comparison = () => {
  const { TITLE, HEADERS, ROWS } = HOME_CONSTANTS.COMPARISON;

  return (
    <section className="bg-[#f7f5fc] py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto space-y-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-purple-700">
          {TITLE}
        </h2>

        {/* Desktop / Large Table */}
        <div className="hidden md:block bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-3 bg-purple-600 text-white font-semibold text-lg">
            {HEADERS.map((header) => (
              <div key={header} className="py-2 px-4 border border-purple-200/30 text-left">
                {header}
              </div>
            ))}
          </div>
          <div>
            {ROWS.map((row, idx) => (
              <div
                key={row.aspect}
                className="grid grid-cols-3 text-base sm:text-lg border-t border-purple-200/40"
              >
                <div className="py-2 px-4 text-gray-900">
                  {row.aspect}
                </div>
                <div className="py-2 px-4 bg-purple-100 font-semibold text-gray-800">
                  {row.dialforce}
                </div>
                <div className="py-2 px-4 text-gray-800">
                  {row.traditional}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Cards */}
        <div className="space-y-5 md:hidden">
          {ROWS.map((row) => (
            <div key={row.aspect} className="bg-white rounded-2xl shadow-md border border-purple-100 overflow-hidden">
              <div className="flex flex-start sm:justify-between items-center px-4 py-3">
                <span className="text-base min-w-[140px] font-semibold text-gray-900">{HEADERS[0]}</span>
                <span className="text-base font-medium text-gray-700 text-left">{row.aspect}</span>
              </div>
              <div className="bg-purple-100 px-4 py-4 flex flex-start sm:justify-between items-center">
                <div className="text-sm min-w-[140px] font-semibold text-purple-700">{HEADERS[1]}</div>
                <div className="text-gray-900 text-base text-left font-semibold mt-1">{row.dialforce}</div>
              </div>
              <div className="px-4 py-4 flex flex-start sm:justify-between items-center">
                <div className="text-sm  min-w-[140px] font-semibold text-purple-700">{HEADERS[2]}</div>
                <div className="text-gray-900 text-base text-left mt-1">{row.traditional}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;


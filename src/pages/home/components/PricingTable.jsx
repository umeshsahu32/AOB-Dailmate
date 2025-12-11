import { pricingTableData } from "../helper/PricingTableData";
import { fields, tableHeaderClass } from "../helper/PricingTableConfig";

const TableRow = ({ packageData }) => {
  return (
    <tr>
      {fields.map((field) => (
        <td key={field.key} className={field.cellClass}>
          {packageData[field.key]}
        </td>
      ))}
    </tr>
  );
};

const MobileCard = ({ packageData }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4">
      <div className="flex flex-col">
        {fields.map((field, fieldIndex) => {
          const isLast = fieldIndex === fields.length - 1;
          const paddingClass = isLast ? "pt-3" : fieldIndex === 0 ? "pb-3" : "py-3";
          const borderClass = isLast ? "" : "border-b border-gray-200";

          return (
            <div
              key={field.key}
              className={`flex items-start gap-4 ${paddingClass} ${borderClass}`}
            >
              <span className="font-bold text-purple-600 text-sm w-[45%] shrink-0 text-left">
                {field.label}:
              </span>
              <span className={field.mobileValueClass}>
                {packageData[field.key]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PricingTable = () => {
  return (
    <section
      id="our-complete-stack"
      className="comparison-section bg-[#f7f5fc] py-12 px-4 sm:px-6 md:px-8 lg:px-[10%] text-center"
    >
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr>
              {fields.map((field) => (
                <th key={field.key} className={tableHeaderClass}>
                  {field.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pricingTableData.map((pkg, index) => (
              <TableRow key={index} packageData={pkg} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile/Tablet Card View */}
      <div className="block md:hidden space-y-4">
        {pricingTableData.map((pkg, index) => (
          <MobileCard key={index} packageData={pkg} />
        ))}
      </div>
    </section>
  );
};

export default PricingTable;

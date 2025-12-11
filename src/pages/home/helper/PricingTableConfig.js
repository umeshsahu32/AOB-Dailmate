import { HOME_CONSTANTS } from "../constants/home";

export const tableHeaderClass = "px-4 py-4 bg-purple-600 text-white font-bold text-left border border-purple-200/20";
export const tableCellBaseClass = "px-4 py-4 text-gray-800 text-base border border-purple-200/20";

const { PACKAGE_NAME, PRICE, MODEL_TYPE, LEAD_POLICY, BEST_USE_CASE } = HOME_CONSTANTS.PRICING_TABLE;

export const fields = [
  {
    key: "packageName",
    label: PACKAGE_NAME,
    cellClass: tableCellBaseClass,
    mobileValueClass: "text-gray-800 text-sm flex-1 text-left",
  },
  {
    key: "price",
    label: PRICE,
    cellClass: `${tableCellBaseClass} bg-purple-50 font-bold`,
    mobileValueClass: "text-gray-800 font-bold text-sm flex-1 text-left",
  },
  {
    key: "modelType",
    label: MODEL_TYPE,
    cellClass: tableCellBaseClass,
    mobileValueClass: "text-gray-800 text-sm flex-1 text-left",
  },
  {
    key: "leadPolicy",
    label: LEAD_POLICY,
    cellClass: tableCellBaseClass,
    mobileValueClass: "text-gray-800 text-sm flex-1 text-left",
  },
  {
    key: "bestUseCase",
    label: BEST_USE_CASE,
    cellClass: tableCellBaseClass,
    mobileValueClass: "text-gray-800 text-sm flex-1 text-left",
  },
];


import { NOT_FOUND_DATA } from "../../utils/data";

const NotFound = () => {
  const {
    PAGE_NOT_FOUND,
    PAGE_NOT_FOUND_DESCRIPTION,
    GO_BACK_TO_HOME,
    PAGE_NOT_FOUND_NUMBER,
  } = NOT_FOUND_DATA;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-[#e0c3fc] to-[#8ec5fc] px-4">
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 sm:p-10 max-w-xl text-center space-y-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-purple-700">
          {PAGE_NOT_FOUND_NUMBER}
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#301c58]">
          {PAGE_NOT_FOUND}
        </h2>
        <p className="text-[#4a4a4a] text-base sm:text-lg">
          {PAGE_NOT_FOUND_DESCRIPTION}
        </p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-full font-semibold transition"
        >
          {GO_BACK_TO_HOME}
        </a>
      </div>
    </div>
  );
};

export default NotFound;

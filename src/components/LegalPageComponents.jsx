// Introduction component
export const Introduction = ({ children }) => {
  return (
    <div className="mb-8 sm:mb-10 md:mb-12">
      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
        {children}
      </p>
    </div>
  );
};

// Main Section component
export const Section = ({ title, children }) => {
  return (
    <div className="mb-8 sm:mb-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-4 sm:mb-6">
        {title}
      </h2>
      {children}
    </div>
  );
};

// Subsection component
export const SubSection = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
};

// Paragraph component
export const Paragraph = ({ children }) => {
  return (
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
      {children}
    </p>
  );
};

// List component for bullet points
export const BulletList = ({ items }) => {
  return (
    <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 ml-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

// Contact section component
export const ContactSection = ({ email = "hello@dialforce.in", children }) => {
  return (
    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
      {children}{" "}
      <a
        href={`mailto:${email}`}
        className="text-purple-600 hover:text-purple-800 underline font-semibold transition-colors duration-200"
      >
        {email}
      </a>
      .
    </p>
  );
};


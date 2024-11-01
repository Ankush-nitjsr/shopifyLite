import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NavMenuSection = ({ section, setVisibleAccountSection }) => {
  const { icon: SectionIcon, sectionTitle, subSections } = section;

  return (
    <div className="px-8 py-4">
      {/* Section Icon */}
      <div className="flex items-center mb-2">
        <SectionIcon className="w-6 h-6 text-gray-600 mr-2" />
        <div className="font-semibold text-gray-700 text-base uppercase">
          {sectionTitle}
        </div>
      </div>

      {/* Subsections */}
      {subSections && (
        <div className="space-y-2">
          {subSections.map((subSection) => (
            <Link
              key={subSection}
              onClick={() => setVisibleAccountSection(subSection)}
              className="block p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <div className="text-gray-600 hover:text-blue-500">
                {subSection}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Adding PropTypes
NavMenuSection.propTypes = {
  section: PropTypes.shape({
    icon: PropTypes.elementType.isRequired, // A React component (e.g., Icon)
    sectionTitle: PropTypes.string.isRequired, // String for the section title
    subSections: PropTypes.arrayOf(PropTypes.string), // Array of strings for subsections
  }).isRequired,
  setVisibleAccountSection: PropTypes.func, // Function to handle section change
};

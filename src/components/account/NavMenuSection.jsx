import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NavMenuSection = ({
  section,
  setVisibleAccountSection,
  setIsAuthenticated,
}) => {
  const {
    icon: SectionIcon,
    sectionTitle,
    path,
    actionFunction,
    subSections,
  } = section;

  // Define the handleClick function
  const handleClick = () => {
    if (sectionTitle.toLowerCase() === "logout") {
      setIsAuthenticated(""); // Clear authentication
    }
    actionFunction && actionFunction(); // Execute the actionFunction if defined
  };

  return (
    <div className="px-8 py-4">
      {/* Section Icon */}
      <div className="flex items-center mb-2">
        <Link to={path} onClick={handleClick}>
          <SectionIcon className="w-6 h-6 text-gray-600 mr-2" />
          <div className="font-semibold text-gray-700 text-base uppercase">
            {sectionTitle}
          </div>
        </Link>
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
    path: PropTypes.string,
    actionFunction: PropTypes.func,
    subSections: PropTypes.arrayOf(PropTypes.string), // Array of strings for subsections
  }).isRequired,
  setVisibleAccountSection: PropTypes.func, // Function to handle section change
  setIsAuthenticated: PropTypes.func.isRequired, // Add setIsAuthenticated as required prop
};

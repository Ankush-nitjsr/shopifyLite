import PropTypes from "prop-types";
import { NavMenuSection } from "./NavMenuSection";
import { Separator } from "../../ui/separator";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { constants } from "./constants";

export const AccountNavMenu = ({
  visibleAccountSection,
  setVisibleAccountSection,
}) => {
  const { setIsAuthenticated } = useContext(AuthContext);

  return (
    <div className="account-nav-menu bg-white shadow-lg rounded-lg w-full">
      {constants.map((section) => (
        <div key={`${section.sectionTitle}-container`}>
          <NavMenuSection
            section={section}
            visibleAccountSection={visibleAccountSection}
            setVisibleAccountSection={setVisibleAccountSection}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Separator className="bg-gray-200" />
        </div>
      ))}
    </div>
  );
};

AccountNavMenu.propTypes = {
  visibleAccountSection: PropTypes.string,
  setVisibleAccountSection: PropTypes.func.isRequired,
};

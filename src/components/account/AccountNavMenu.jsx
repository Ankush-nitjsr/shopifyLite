import {
  BriefcaseIcon,
  CreditCardIcon,
  PowerIcon,
  TruckIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import { NavMenuSection } from "./NavMenuSection";
import { Separator } from "../../ui/separator";
import { logout } from "../../lib/logout";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const constants = [
  {
    icon: TruckIcon,
    sectionTitle: "my orders",
    path: "",
    actionFunction: () => console.log("My Orders Clicked"), // Example action
  },
  {
    icon: UserIcon,
    sectionTitle: "account settings",
    path: "",
    actionFunction: () => console.log("Account Settings Clicked"), // Example action
    subSections: ["Personal Information", "Manage Addresses"],
  },
  {
    icon: CreditCardIcon,
    sectionTitle: "payments",
    path: "",
    actionFunction: () => console.log("Payments Clicked"), // Example action
    subSections: ["Saved UPI", "Saved Cards"],
  },
  {
    icon: BriefcaseIcon,
    sectionTitle: "my stuff",
    path: "",
    actionFunction: () => console.log("My Stuff Clicked"), // Example action
    subSections: ["My Wishlist", "My Reviews & Ratings"],
  },
  {
    icon: PowerIcon,
    sectionTitle: "logout",
    path: "/",
    actionFunction: logout,
  },
];

export const AccountNavMenu = ({ setVisibleAccountSection }) => {
  const { setIsAuthenticated } = useContext(AuthContext);

  return (
    <div className="account-nav-menu bg-white shadow-lg rounded-lg w-full">
      {constants.map((section) => (
        <div key={`${section.sectionTitle}-container`}>
          <NavMenuSection
            section={section}
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
  setVisibleAccountSection: PropTypes.func.isRequired,
};

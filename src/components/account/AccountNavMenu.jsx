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

const constants = [
  {
    icon: TruckIcon,
    sectionTitle: "my orders",
  },
  {
    icon: UserIcon,
    sectionTitle: "account settings",
    subSections: ["Personal Information", "Manage Addresses"],
  },
  {
    icon: CreditCardIcon,
    sectionTitle: "payments",
    subSections: ["Saved UPI", "Saved Cards"],
  },
  {
    icon: BriefcaseIcon,
    sectionTitle: "my stuff",
    subSections: ["My Wishlist", "My Reviews & Ratings"],
  },
  {
    icon: PowerIcon,
    sectionTitle: "logout",
  },
];

export const AccountNavMenu = ({ setVisibleAccountSection }) => {
  return (
    <div className="account-nav-menu bg-white shadow-lg rounded-lg w-full">
      {constants.map((section) => (
        <div key={`${section.sectionTitle}-container`}>
          <NavMenuSection
            section={section}
            setVisibleAccountSection={setVisibleAccountSection}
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

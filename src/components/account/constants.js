import {
  BriefcaseIcon,
  CreditCardIcon,
  PowerIcon,
  TruckIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { logout } from "../../lib/logout";

export const constants = [
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

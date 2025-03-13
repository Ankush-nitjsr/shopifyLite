import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import { AccountNavMenu } from "./AccountNavMenu";
import { UserModal } from "./UserModal";
import { AccountDetails } from "./AccountDetails";

const Account = () => {
  // Get user details with context hook
  const { user } = useContext(AuthContext);

  // Manage visible section with useState hook
  const [visibleAccountSection, setVisibleAccountSection] = useState(
    "Personal Information"
  );

  return (
    <div className="user-account flex w-full bg-gray-200 space-x-5 px-2 py-6 justify-center text-black">
      <div className="left-container w-[20%] space-y-5">
        <UserModal user={user} />
        <AccountNavMenu
          visibleAccountSection={visibleAccountSection}
          setVisibleAccountSection={setVisibleAccountSection}
        />
      </div>
      <div className="right-container w-[60%] bg-white p-8 shadow-lg rounded-lg">
        <AccountDetails user={user} accountSection={visibleAccountSection} />
      </div>
    </div>
  );
};

export default Account;

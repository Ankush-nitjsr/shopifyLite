import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import { AccountNavMenu } from "./AccountNavMenu";
import { UserModal } from "./UserModal";
import { AccountDetails } from "./AccountDetails";

export const Account = () => {
  // Get user details with context hook
  const { userDetails } = useContext(AuthContext);
  const { setUserDetails } = useContext(AuthContext);
  const [visibleAccountSection, setVisibleAccountSection] = useState(
    "Personal Information"
  );
  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
  }, [setUserDetails]);
  return (
    <div className="user-account flex w-full bg-gray-200 space-x-5 px-2 py-6 justify-center text-gray-900">
      <div className="left-container w-[20%] space-y-5">
        <UserModal user={userDetails} />
        <AccountNavMenu setVisibleAccountSection={setVisibleAccountSection} />
      </div>
      <div className="right-container w-[60%] bg-white p-8 shadow-lg rounded-lg">
        <AccountDetails
          user={userDetails}
          accountSection={visibleAccountSection}
        />
      </div>
    </div>
  );
};

import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import { AccountNavMenu } from "./AccountNavMenu";
import { UserModal } from "./UserModal";
import { AccountDetails } from "./AccountDetails";

export const Account = () => {
  // Get user details with context hook
  const { userSession } = useContext(AuthContext);
  const { setUserSession } = useContext(AuthContext);
  const [visibleAccountSection, setVisibleAccountSection] = useState(
    "Personal Information"
  );
  useEffect(() => {
    setUserSession(JSON.parse(localStorage.getItem("userSession")));
  }, [setUserSession]);
  return (
    <div className="user-account flex w-full bg-gray-200 space-x-5 px-2 py-6 justify-center text-black">
      <div className="left-container w-[20%] space-y-5">
        <UserModal user={userSession} />
        <AccountNavMenu setVisibleAccountSection={setVisibleAccountSection} />
      </div>
      <div className="right-container w-[60%] bg-white p-8 shadow-lg rounded-lg">
        <AccountDetails
          user={userSession}
          accountSection={visibleAccountSection}
        />
      </div>
    </div>
  );
};

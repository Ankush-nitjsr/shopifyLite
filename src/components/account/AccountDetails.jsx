import PropTypes from "prop-types";
import { userPropTypes } from "../../lib/userPropTypes";
import { PersonalInformation } from "./PersonalInformation";
import { UserAddress } from "./UserAddress";

export const AccountDetails = ({ user, accountSection }) => {
  return (
    <div>
      {accountSection === "Personal Information" && (
        <PersonalInformation user={user} />
      )}
      {accountSection === "Manage Addresses" && (
        <UserAddress
          name={`${user.firstName} ${user.lastName}`}
          address={user.address}
          phone={user.phone}
        />
      )}
    </div>
  );
};

AccountDetails.propTypes = {
  user: userPropTypes,
  accountSection: PropTypes.string,
};

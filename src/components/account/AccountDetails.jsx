import PropTypes from "prop-types";
import { userPropTypes } from "../../lib/userPropTypes";
import { PersonalInformation } from "./PersonalInformation";

export const AccountDetails = ({ user, accountSection }) => {
  return (
    <div>
      {accountSection === "Personal Information" && (
        <PersonalInformation user={user} />
      )}
    </div>
  );
};

AccountDetails.propTypes = {
  user: userPropTypes,
  accountSection: PropTypes.string,
};

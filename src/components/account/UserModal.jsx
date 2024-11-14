import { userPropTypes } from "../../lib/userPropTypes";

export const UserModal = ({ user }) => {
  return (
    <div className="flex items-center bg-white p-4 shadow-lg rounded-lg space-x-4">
      <div className="user-avatar">
        <img src={user.image} alt="user-avatar" className="h-16 w-16" />
      </div>
      <div className="greeting">
        <div>
          <span className="text-sm">Hello,</span>
        </div>
        <div>
          <span className="text-2xl font-medium">{user.firstName}</span>
        </div>
      </div>
    </div>
  );
};

UserModal.propTypes = {
  user: userPropTypes,
};

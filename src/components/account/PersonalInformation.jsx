import { useEffect, useState } from "react";
import { userPropTypes } from "../../lib/userPropTypes";
import Button from "../../ui/buttons/Button";

export const PersonalInformation = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
  });

  // Toggle editing mode
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  // Handle save click
  const handleSaveClick = () => {
    setIsEditing(false);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  return (
    <div className="bg-white space-y-8">
      {/* Header with Edit button */}
      <form action="" className="space-y-4">
        <div className="flex items-center space-x-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Personal Information
          </h2>
          {!isEditing && (
            <button
              onClick={handleEditClick}
              className="text-blue-700 font-semibold hover:underline"
            >
              Edit
            </button>
          )}
          {isEditing && (
            <button
              onClick={handleCancelClick}
              className="text-blue-700 font-semibold hover:underline"
            >
              Cancel
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex justify-start space-x-4">
            <div className="w-[40%]">
              <label htmlFor="firstname" className="block text-gray-700 mb-1">
                First name
              </label>
              <input
                id="firstname"
                value={formData?.firstName || ""}
                onChange={handleInputChange}
                type="text"
                className="mt-1 p-2 bg-gray-200 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
              />
            </div>
            <div className="w-[40%]">
              <label htmlFor="lastname" className="block text-gray-700 mb-1">
                Last name
              </label>
              <input
                id="lastname"
                value={formData?.lastName || ""}
                onChange={handleInputChange}
                type="text"
                className="mt-1 p-2 bg-gray-200 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isEditing}
              />
            </div>
            <div className="flex items-end">
              {isEditing && <Button onClick={handleSaveClick}>Save</Button>}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">Your Gender</h2>
            <div className="space-x-4 mt-2 flex">
              <div className="flex">
                <input
                  id="male"
                  type="radio"
                  checked={formData?.gender === "male"}
                  onChange={() => setFormData({ ...formData, gender: "male" })}
                  className="mr-2"
                  disabled={!isEditing}
                />
                <label
                  htmlFor="male"
                  className={`flex items-center ${
                    formData?.gender === "male"
                      ? "font-semibold"
                      : "font-normal"
                  }`}
                >
                  Male
                </label>
              </div>

              <div className="flex">
                <input
                  id="female"
                  type="radio"
                  checked={formData?.gender === "female"}
                  onChange={() =>
                    setFormData({ ...formData, gender: "female" })
                  }
                  className="mr-2"
                  disabled={!isEditing}
                />
                <label
                  htmlFor="female"
                  className={`flex items-center ${
                    formData?.gender === "female"
                      ? "font-semibold"
                      : "font-normal"
                  }`}
                >
                  Female
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="space-y-4">
        <form action="" className="space-y-4">
          <div className="flex items-center space-x-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Email Address
            </h2>
            {!isEditing && (
              <button
                onClick={handleEditClick}
                className="text-blue-700 font-semibold hover:underline"
              >
                Edit
              </button>
            )}
            {isEditing && (
              <button
                onClick={handleCancelClick}
                className="text-blue-700 font-semibold hover:underline"
              >
                Cancel
              </button>
            )}
          </div>
          <div className="flex justify-start space-x-4">
            <input
              id="email"
              value={formData?.email || ""}
              onChange={handleInputChange}
              type="text"
              className="w-[40%] mt-1 p-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
            <div className="flex items-end">
              {isEditing && <Button onClick={handleSaveClick}>Save</Button>}
            </div>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        <form action="" className="space-y-4">
          <div className="flex items-center space-x-8">
            <h2 className="text-xl font-semibold text-gray-800">
              Mobile Number
            </h2>
            {!isEditing && (
              <button
                onClick={handleEditClick}
                className="text-blue-700 font-semibold hover:underline"
              >
                Edit
              </button>
            )}
            {isEditing && (
              <button
                onClick={handleCancelClick}
                className="text-blue-700 font-semibold hover:underline"
              >
                Cancel
              </button>
            )}
          </div>
          <div className="flex justify-start space-x-4">
            <input
              id="phone"
              value={formData?.phone || ""}
              onChange={handleInputChange}
              type="text"
              className="w-[40%] mt-1 p-2 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!isEditing}
            />
            <div className="flex items-end">
              {isEditing && <Button onClick={handleSaveClick}>Save</Button>}
            </div>
          </div>
        </form>
      </div>

      <div className="faqs space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">FAQs</h2>
        {[
          {
            question:
              "What happens when I update my email address (or mobile number)?",
            answer:
              "Your login email id (or mobile number) changes, likewise. You'll receive all your account-related communication on your updated email address (or mobile number).",
          },
          {
            question:
              "When will my Shopify account be updated with the new email address (or mobile number)?",
            answer:
              "It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.",
          },
          {
            question:
              "What happens to my existing Shopify account when I update my email address (or mobile number)?",
            answer:
              "Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your order history, saved information, and personal details.",
          },
          {
            question:
              "Does my Seller account get affected when I update my email address?",
            answer:
              "Shopify has a 'single sign-on' policy. Any changes will reflect in your Seller account also.",
          },
        ].map((faq, index) => (
          <div key={index}>
            <p className="font-medium text-sm text-gray-700">{faq.question}</p>
            <p className="font-light text-sm text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="account-deactivation flex flex-col items-start space-y-4">
        <button className="text-blue-700 font-semibold hover:underline">
          Deactivate Account
        </button>
        <button className="text-red-700 font-semibold hover:underline">
          Delete Account
        </button>
      </div>
    </div>
  );
};

PersonalInformation.propTypes = {
  user: userPropTypes,
};

import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../ui/buttons/Button";
import { MapPinIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Separator } from "../../ui/separator";

export const UserAddress = ({ name, address, phone }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      {/* Component title */}
      <h1 className="text-2xl font-bold text-gray-800">Manage Addresses</h1>

      {/* Add new address button */}
      {!isEditing && (
        <div className="border border-gray-200 p-3 rounded-sm">
          <Button
            onClick={() => setIsEditing(true)}
            variant="link"
            className="flex items-center gap-2"
          >
            <PlusIcon className="w-5 h-5" />
            <span className="font-semibold">ADD A NEW ADDRESS</span>
          </Button>
        </div>
      )}

      {/* Add new address form */}
      {isEditing && (
        <form
          action=""
          className="space-y-3 bg-orange-50 border border-gray-200 p-6 rounded-sm"
        >
          <h2 className="text-base font-semibold text-gray-800">
            ADD A NEW ADDRESS
          </h2>
          <Button className="gap-1 px-8">
            <MapPinIcon className="w-4 h-4" />
            <span>Use my current location</span>
          </Button>
          <div className="w-[75%] space-y-3">{/* Form Fields */}</div>
        </form>
      )}

      {/* Existing address */}
      <div className="flex flex-col justify-between border border-gray-200 rounded-sm p-4 h-48">
        <div className="text-gray-600">
          <p className="font-semibold text-black mb-1">{name}</p>
          <p>
            <span>{address.address}</span>
            {","}
          </p>
          <p className="space-x-2">
            <span>{address.city}</span>
            {","}
            <span>{`${address.state}(${address.stateCode})`}</span>
            <span>{address.postalCode}</span>
            <span>{address.country}</span>
            <span className="space-x-2">
              (<span>{address.coordinates.lat}</span>
              <span>{address.coordinates.lng}</span>)
            </span>
          </p>
          <p>{`Phone number: ${phone}`}</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="link" className="text-base">
            Edit
          </Button>
          <Separator orientation="vertical" className="bg-gray-500 h-3" />
          <Button variant="link" className="text-base">
            Remove
          </Button>
          <Separator orientation="vertical" className="bg-gray-500 h-3" />
          <Button variant="link" className="text-base">
            Set as Default
          </Button>
        </div>
      </div>
    </div>
  );
};

// PropTypes Validation
UserAddress.propTypes = {
  name: PropTypes.string,
  address: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    stateCode: PropTypes.string,
    postalCode: PropTypes.string,
    country: PropTypes.string,
    coordinates: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  }),
  phone: PropTypes.string,
};

import PropTypes from "prop-types";

export const userPropTypes = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  maidenName: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.oneOf(["male", "female", "other"]),
  email: PropTypes.string,
  phone: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  birthDate: PropTypes.string,
  image: PropTypes.string,
  bloodGroup: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.number,
  eyeColor: PropTypes.string,
  hair: PropTypes.shape({
    color: PropTypes.string,
    type: PropTypes.string,
  }),
  ip: PropTypes.string,
  address: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    stateCode: PropTypes.string,
    postalCode: PropTypes.string,
    coordinates: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
    country: PropTypes.string,
  }),
  macAddress: PropTypes.string,
  university: PropTypes.string,
  bank: PropTypes.shape({
    cardExpire: PropTypes.string,
    cardNumber: PropTypes.string,
    cardType: PropTypes.string,
    currency: PropTypes.string,
    iban: PropTypes.string,
  }),
  company: PropTypes.shape({
    department: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    address: PropTypes.shape({
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      stateCode: PropTypes.string,
      postalCode: PropTypes.string,
      coordinates: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
      country: PropTypes.string,
    }),
  }),
  ein: PropTypes.string,
  ssn: PropTypes.string,
  userAgent: PropTypes.string,
  crypto: PropTypes.shape({
    coin: PropTypes.string,
    wallet: PropTypes.string,
    network: PropTypes.string,
  }),
  role: PropTypes.oneOf(["admin", "moderator", "user"]),
});

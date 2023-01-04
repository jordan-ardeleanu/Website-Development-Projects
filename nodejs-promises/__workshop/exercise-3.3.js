// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    q: `${lat}, ${lng}`,
    key: process.env.OPENCAGE_API_KEY
  };
  return opencage
    .geocode(requestObj)
    .then((data) => {
      const response = data.results[0].formatted;
      return response;
    })
    .catch((error) => {
      console.log('error', error.message);
    });
}

getAddressFromPosition('48.8584', '2.2945').then((response) =>
  console.log(response)
);

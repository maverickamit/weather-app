const request = require("request");
const geocode = require("./geocode.js");
const weatherUrl =
  "https://api.darksky.net/forecast/16c76dbed11f350b6b9a6946681648b9/34.0544,-118.2439?units=si";
const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/los%20angeles.json?access_token=pk.eyJ1IjoibXltYXAyNSIsImEiOiJjazR6Nml0bnYwN2NoM21xdmJhdGh3dm9sIn0.S1sbjP9fdP3Ui7cWGYBitw&limit=1";

// Returning latitude and longitude of a place

// request({ url: geocodeUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log(
//       "Can not connect to the weather service! Please check your connection."
//     );
//   } else if (response.body.features.length === 0) {
//     console.log("The given location doesn't exist");
//   } else {
//     const geoData = response.body.features[0];
//     console.log(
//       `${geoData.place_name} \nLongitude ${geoData.center[0]} \nLatitude ${geoData.center[1]}`
//     );
//     weatherInfo(weatherUrl);
//   }
// });

//Returning weather info for given input of latitude and longitude

// const weatherInfo = function(url) {
//   request({ url: url, json: true }, (error, response) => {
//     const data = response.body;
//     if (error) {
//       console.log(
//         "Can not connect to the weather service! Please check your connection."
//       );
//     } else if (data.error) {
//       console.log("The given location doesn't exist");
//     } else {
//       console.log(
//         `It is currently ${Math.round(
//           data.currently.temperature
//         )} degrees outside. There is ${Math.round(
//           data.currently.precipProbability * 100
//         )}% chance of rain.`
//       );
//     }
//   });
// };

//Using callback function

geocode("Kolkata", (error, data) => {
  console.log(error);
  console.log(data);
});

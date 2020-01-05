const request = require("request");
const geocode = require("./geocode.js");
const forecast = require("./forecast");
const weatherUrl =
  "https://api.darksky.net/forecast/16c76dbed11f350b6b9a6946681648b9/34.0544,-118.2439?units=si";
const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/los%20angeles.json?access_token=pk.eyJ1IjoibXltYXAyNSIsImEiOiJjazR6Nml0bnYwN2NoM21xdmJhdGh3dm9sIn0.S1sbjP9fdP3Ui7cWGYBitw&limit=1";

// Returning latitude and longitude of a place

//Returning weather info for given input of latitude and longitude

//Using callback function

// geocode("Kolkata", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

forecast(-75.7088, 44.1545, (error, data) => {
  console.log(error);
  console.log(data);
});

// const weatherInfo = address => {
//   geocode()
// };

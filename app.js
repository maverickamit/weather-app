const request = require("request");
const url =
  "https://api.darksky.net/forecast/16c76dbed11f350b6b9a6946681648b9/22.5726,88.3639?units=si";
const geocodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibXltYXAyNSIsImEiOiJjazR6Nml0bnYwN2NoM21xdmJhdGh3dm9sIn0.S1sbjP9fdP3Ui7cWGYBitw&limit=1";
request({ url: geocodeUrl, json: true }, (error, response) => {
  const geoData = response.body.features[0];
  console.log(
    `${geoData.place_name} \nLongitude ${geoData.center[0]} \nLatitude ${geoData.center[1]}`
  );
});

request({ url: url, json: true }, (error, response) => {
  const data = response.body;
  console.log(
    `It is currently ${Math.round(
      data.currently.temperature
    )} degrees outside. There is ${Math.round(
      data.currently.precipProbability * 100
    )}% chance of rain.`
  );
});

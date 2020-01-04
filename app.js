const request = require("request");
const url =
  "https://api.darksky.net/forecast/16c76dbed11f350b6b9a6946681648b9/22.5726,88.3639?units=si";

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

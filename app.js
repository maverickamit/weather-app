const request = require("request");
const geocode = require("./geocode.js");
const forecast = require("./forecast");
const location = process.argv[2];

//Using callback functions

const weatherInfo = address => {
  geocode(address, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      console.log(data.location);
    }
    forecast(data.latitude, data.longitude, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  });
};

weatherInfo(location);

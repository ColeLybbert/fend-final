import { weatherAPI } from "../../server/server";

const weatherApiKey = process.env.WEATHER_API_KEY;
const baseURL = " http://api.weatherbit.io/v2.0/current"
let button = document.getElementById('submitBtn');

const submitForm = async () => {
    weatherAPI();
}

document.addEventListener('DOMContentLoaded', function () {
    button.addEventListener("click", () => {
      submitForm();
    });
  });
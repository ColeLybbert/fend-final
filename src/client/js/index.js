import { weatherApiKey } from "../../../mockJSEnv";
import { geoApiKey } from "../../../mockJSEnv";
import { pixApiKey } from "../../../mockJSEnv";

const weatherBaseURL = " http://api.weatherbit.io/v2.0/current"
const pixBaseURL = "https://pixabay.com/api/"
const geoBaseUrl = "https://secure.geonames.org/searchJSON?"
let button = document.getElementById('submitBtn');

const submitForm = async () => {
    geoAPI(geoBaseUrl);
}
export const geoAPI = async (geoBaseUrl) => {
    try{
        const res = await fetch(`${geoBaseUrl}q=london&maxRows=10&username=Cole200406`);
        const data = await res.json();
        console.log(data);
        return (data);
    }catch (err) {
        return `Failed ${err}`
    }
}

export const weatherAPI = async (weatherBaseUrl,apiKey) => {
    try{
        //WRONG! hardcoded. Needs to be zipcode from a parameter that will later be user input
        const res = await fetch(`${weatherBaseUrl}?lat=35.7796&lon=-78.6382&key=${apiKey}&include=minutely`);
        const data = await res.json();
        console.log(data);
        return (data);
    }catch (err) {
        return `Failed ${err}`
    }
}

export const pixAPI = async (pixBaseURL, pixApiKey) => {
    try{
        const res = await fetch(`${pixBaseURL}?key=${pixApiKey}&q=yellow+flowers&image_type=photo`);
        const data = await res.json();
        console.log(data);
        return (data);
    }catch (err) {
        return `Failed ${err}`
    }
}

document.addEventListener('DOMContentLoaded', function () {
    button.addEventListener("click", () => {
      submitForm();
    });
  });
import { pixAPI } from "./pixFetch";
import { geoAPI } from "./geoFetch";
import { weatherAPI } from "./weatherFetch";
import { forecastWeather } from "./forecastWeather";

let formInput = "Raleigh"

let button = document.getElementById('submitBtn')

const submitForm = async () => {
    console.log('hi');
    geoAPI(formInput);
    await weatherAPI(formInput);
    await forecastWeather(formInput);
}

button.addEventListener('click', () => {
    submitForm(formInput,);
})
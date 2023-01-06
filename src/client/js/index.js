import { pixAPI } from "./pixFetch";
import { geoAPI } from "./geoFetch";
import { weatherAPI } from "./weatherFetch";
import { forecastWeather } from "./forecastWeather";
import { checkForDate } from "./checkForDate";
import { forecastOrCurrent } from "./forecastOrCurrent";

let formInput = "Raleigh"

let dateInput = new Date();

let button = document.getElementById('submitBtn')

const submitForm = async () => {
    checkForDate(dateInput);
    await forecastOrCurrent(dateInput);
}

button.addEventListener('click', () => {
    submitForm(formInput, dateInput);
})
import { pixAPI } from "./pixFetch";
import { geoAPI } from "./geoFetch";
import { checkForDate } from "./checkForDate";
import { forecastOrCurrent } from "./forecastOrCurrent";

let formInput = "Raleigh"


let dateInput = Date.now() + (1000 * 60 * 60 * 24 * 8)

let button = document.getElementById('submitBtn')

const submitForm = async () => {
    pixAPI(formInput);
    geoAPI(formInput);
    checkForDate(dateInput);
    await forecastOrCurrent(dateInput);
}

button.addEventListener('click', () => {
    submitForm(formInput, dateInput);
})
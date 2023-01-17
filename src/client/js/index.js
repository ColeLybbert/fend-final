import '../styles/main.scss'

import { secondConverter } from './secondConverter';
import { pixAPI } from "./pixFetch";
import { geoAPI } from "./geoFetch";
import { checkForDate } from "./checkForDate";
import { forecastOrCurrent } from "./forecastOrCurrent";
import { formListener } from './listener';

//Define form
let formInput = document.getElementById('placeInput');

//Runs everything need to work the api's from the other files
const submitForm = async () => {
    let formDate = document.getElementById('dateInput').value;
    let dateInput = await secondConverter(formDate);
    pixAPI(formInput);
    geoAPI(formInput);
    await checkForDate(dateInput);
    await forecastOrCurrent(dateInput);
    console.log(dateInput);
};

//Imported EventListener that runs submitForm
document.addEventListener('DOMContentLoaded', function () {
  formListener(submitForm);
});
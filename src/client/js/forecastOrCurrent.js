import { checkForDate } from "./checkForDate";
import { forecastWeather } from "./forecastWeather";
import { weatherAPI } from "./weatherFetch";

//Takes the defined "Week Away" from checkForDate.js, essentially if checkForDate returned true it will fetch the forecast api, if not it will run the current weather api 
export const forecastOrCurrent = async (dateInput, formInput) => {
    let weekAway = await checkForDate(dateInput);
    if (weekAway) {
        return forecastWeather(formInput, dateInput);
    }else {
        return weatherAPI(formInput);
    }
}
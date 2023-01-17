import { checkForDate } from "./checkForDate";

//Takes the defined "Week Away" from checkForDate.js, essentially if checkForDate returned true it will fetch the forecast api, if not it will run the current weather api 
export const forecastOrCurrent = async (dateInput) => {
    let weekAway = await checkForDate(dateInput);
    console.log(weekAway);
    if (weekAway) {
        console.log(`Running Forcast API`)
    }else {
        console.log(`Running current API`)
    }
}
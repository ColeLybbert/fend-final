import { checkForDate } from "./checkForDate";

export const forecastOrCurrent = async (dateInput) => {
    let weekAway = await checkForDate(dateInput);
    console.log(weekAway);
    if (weekAway) {
        console.log(`Running Forcast API`)
    }else {
        console.log(`Running current API`)
    }
}
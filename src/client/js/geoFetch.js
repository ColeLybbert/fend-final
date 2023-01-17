import { geoApiKey } from "../../../mockJSEnv";
import { postData } from "./postData";
const geoBaseUrl = "https://secure.geonames.org/searchJSON?"

//Fetches coordinates from api and returns it, needed to make any of the weather api's work since they require coordinates
export const geoAPI = async (formInput) => {
    try{
        const res = await fetch(`${geoBaseUrl}q=${formInput}&maxRows=10&username=${geoApiKey}`);
        const apiData = await res.json();
        console.log(`Returned geo Data`);
        postData(apiData);
        return (apiData);
    }catch (err) {
        return `Failed ${err}`
    }
}
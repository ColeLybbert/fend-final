import { geoApiKey } from "../../../mockJSEnv";

const geoBaseUrl = "https://secure.geonames.org/searchJSON?"

export const geoAPI = async (formInput) => {
    try{
        const res = await fetch(`${geoBaseUrl}q=${formInput}&maxRows=10&username=${geoApiKey}`);
        const data = await res.json();
        console.log(`Returned geo Data`);
        return (data);
    }catch (err) {
        return `Failed ${err}`
    }
}
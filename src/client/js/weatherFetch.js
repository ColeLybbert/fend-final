import { weatherApiKey } from "../../../mockJSEnv";
import { geoAPI } from "./geoFetch";
const weatherBaseUrl = " http://api.weatherbit.io/v2.0/current"

export const weatherAPI = async (formInput) => {
    try{
        let data = await geoAPI(formInput);
        let latlon = await returnLatLon(data)
        const res = await fetch(`${weatherBaseUrl}?${latlon}&key=${weatherApiKey}&include=minutely`);
        const apiData = await res.json();
        console.log(apiData);
        return (apiData);
    }catch (err) {
        return `Failed ${err}`
    }
}

export const returnLatLon = async (data) => {
    try {
        let latlon = `lat=${data.geonames[0].lat}&lon=${data.geonames[0].lng}`;
        return latlon
    }catch (err){
        `Failed: ${err}`
    }
}
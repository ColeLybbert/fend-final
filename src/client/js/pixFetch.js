import { pixApiKey } from "../../../mockJSEnv";
import { postData } from "./postData";
const pixBaseURL = "https://pixabay.com/api/"

// Fetches api Data and returns it, returns pictures of location for UI
export const pixAPI = async (formInput) => {
    try{
        const res = await fetch(`${pixBaseURL}?key=${pixApiKey}&q=${formInput}&image_type=photo`);
        const apiData = await res.json();
        console.log(apiData);
        postData(apiData);
        return (apiData);
    }catch (err) {
        return `Failed ${err}`
    }
}


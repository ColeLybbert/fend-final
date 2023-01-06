import { pixApiKey } from "../../../mockJSEnv";

const pixBaseURL = "https://pixabay.com/api/"


export const pixAPI = async (formInput) => {
    try{
        const res = await fetch(`${pixBaseURL}?key=${pixApiKey}&q=${formInput}&image_type=photo`);
        const data = await res.json();
        console.log(data);
        return (data);
    }catch (err) {
        return `Failed ${err}`
    }
}

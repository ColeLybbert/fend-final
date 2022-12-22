const weatherApiKey = process.env.WEATHER_API_KEY;
const baseURL = " http://api.weatherbit.io/v2.0/current"
let button = document.getElementById('submitBtn');

const submitForm = async () => {
    weatherAPI(baseURL,weatherApiKey);
}


export const weatherAPI = async (baseUrl,apiKey) => {
    try{
        const res = await fetch(`${baseUrl}?lat=35.7796&lon=-78.6382&key=${apiKey}&include=minutely`);
        const data = await res.json();
        console.log(data);
        return (data);
    }catch (err) {
        return `Failed ${err}`
    }
}

document.addEventListener('DOMContentLoaded', function () {
    button.addEventListener("click", () => {
      submitForm();
    });
  });
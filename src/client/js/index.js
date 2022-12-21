const weatherApiKey = process.env.WEATHER_API_KEY;
const baseURL = " http://api.weatherbit.io/v2.0/current"
let button = document.getElementById('submitBtn');

const submitForm = async () => {
    weatherAPI();
}


export const weatherAPI = async () => {
    try{
        const res = await fetch(`${baseURL}?lat=35.7796&lon=-78.6382&key=${weatherApiKey}&include=minutely`);
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
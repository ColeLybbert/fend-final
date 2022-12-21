/**
 * @jest-environment jsdom
 */
import "isomorphic-fetch";
import { weatherAPI } from ".";
const baseURL = " http://api.weatherbit.io/v2.0/current"
describe('Test Weather API', function () {
    const weatherApiKey = `${process.env.WEATHER_API_KEY}`;
    test('Returns weather for zipcode and time', async () => {
        console.log(weatherApiKey);
        let data = await weatherAPI(baseURL,weatherApiKey);
        expect(data).toEqual('here we need to see how to make sure the data isnt wrong or undefined');
    });

    
});
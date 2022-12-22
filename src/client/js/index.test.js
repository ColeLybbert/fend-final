/**
 * @jest-environment jsdom
 */
import "isomorphic-fetch";
import { weatherApiKey } from "../../../mockJSEnv";
import { weatherAPI } from ".";
const baseURL = " http://api.weatherbit.io/v2.0/current"
describe('Test Weather API', function () {
    test('Returns weather for zipcode and time', async () => {
        console.log(weatherApiKey);
        let data = await weatherAPI(baseURL,weatherApiKey);
        expect(data).toEqual('here we need to see how to make sure the data isnt wrong or undefined');
    });

    
});
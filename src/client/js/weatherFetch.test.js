import { returnLatLon } from "./weatherFetch";
import { geoAPI } from "./geoFetch";

export const mockData = {
    count: 1,
    data: [
      {
        app_temp: 6.9,
        aqi: 7,
        city_name: "Raleigh",
        clouds: 100,
        country_code: "US",
        datetime: "2022-12-22:23",
        dewpt: 4.8,
        dhi: 0,
        dni: 0,
        elev_angle: -22.38,
        ghi: 0,
        gust: 1.3,
        h_angle: -90,
        lat: 35.7796,
        lon: -78.6382,
        ob_time: "2022-12-22 23:40",
        pod: "n",
        precip: 20,
        pres: 994.1,
        rh: 94,
        slp: 1010.3,
        snow: null,
        solar_rad: 0,
        sources: [
          "1327W"
        ],
        state_code: "NC",
        station: "1327W",
        sunrise: "12:21",
        sunset: "22:06",
        temp: 5.7,
        timezone: "America/New_York",
        ts: 1671752400,
        uv: 0,
        vis: 12,
        weather: {
          code: 741,
          description: "Fog",
          icon: "a05n"
        },
        wind_cdir: "W",
        wind_cdir_full: "west",
        wind_dir: 263,
        wind_spd: 0.45
      }
    ]
  }
describe('Test Weather API', function () {
    const data = mockData.data[0];
    test('app temp should be number', async () => {
        expect(typeof data.app_temp).toBe('number');
    });
    test('aqi should be number', async () => {
        expect(typeof data.aqi).toBe('number');
    });
    test('city name should be Raleigh', async () => {
        expect(data.city_name).toBe('Raleigh');
    });
    test('clouds should be number', async () => {
        expect(typeof data.clouds).toBe('number');
    });
    test('country name should be US', async () => {
        expect(data.country_code).toBe('US');
    });
    test('datetime should be string', async () => {
        expect(typeof data.datetime).toBe('string');
    });
    test('dewpt should be number', async () => {
        expect(typeof data.dewpt).toBe('number');
    });
    test('dhi should be number', async () => {
        expect(typeof data.dhi).toBe('number');
    });
    test('dni should be number', async () => {
        expect(typeof data.dni).toBe('number');
    });
    test('elev_angle should be number', async () => {
        expect(typeof data.elev_angle).toBe('number');
    });
    test('gni should be number', async () => {
        expect(typeof data.ghi).toBe('number');
    });
    test('gust should be number', async () => {
        expect(typeof data.gust).toBe('number');
    });
    test('h_angle should be number', async () => {
        expect(typeof data.h_angle).toBe('number');
    });
    test('lat should be number', async () => {
        expect(typeof data.lat).toBe('number');
    });
    test('lon should be number', async () => {
        expect(typeof data.lon).toBe('number');
    });
    test('ob time should be a string', async () => {
        expect(typeof data.ob_time).toBe('string');
    });
    test('pod should be a string', async () => {
        expect(typeof data.pod).toBe('string');
    });
    test('precip should be null or a number', async () => {
        expect(['number','object']).toContain(typeof data.precip);
    });
    test('pres should be number', async () => {
        expect(typeof data.pres).toBe('number');
    });
    test('rh should be number', async () => {
        expect(typeof data.rh).toBe('number');
    });
    test('slp should be number', async () => {
        expect(typeof data.slp).toBe('number');
    });
    test('snow should be null or a number', async () => {
        expect(['number','object']).toContain(typeof data.snow);
    });
    test('solar rad should be number', async () => {
        expect(typeof data.solar_rad).toBe('number');
    });
    test('sources should be a 1327W', async () => {
        expect(data.sources[0]).toBe('1327W');
    });
    test('state code should be NC', async () => {
        expect(data.state_code).toBe('NC');
    });
    test('station should be 1327W', async () => {
        expect(data.station).toBe('1327W');
    });
    test('sunrise should be a string', async () => {
        expect(typeof data.sunrise).toBe('string');
    });
    test('sunset should be a string', async () => {
        expect(typeof data.sunset).toBe('string');
    });
    test('temp should be number', async () => {
        expect(typeof data.temp).toBe('number');
    });
    test('timezone should be a America/New_York', async () => {
        expect(data.timezone).toBe('America/New_York');
    });
    test('ts should be number', async () => {
        expect(typeof data.ts).toBe('number');
    });
    test('uv should be number', async () => {
        expect(typeof data.uv).toBe('number');
    });
    test('vis should be number', async () => {
        expect(typeof data.vis).toBe('number');
    });
    test('weather code should be number', async () => {
        expect(typeof data.weather.code).toBe('number');
    });
    test('weather description should be string', async () => {
        expect(typeof data.weather.description).toBe('string');
    });
    test('weather icon should be string', async () => {
        expect(typeof data.weather.icon).toBe('string');
    });
    test('wind cdir should be string', async () => {
        expect(typeof data.wind_cdir).toBe('string');
    });
    test('wind cdir full should be string', async () => {
        expect(typeof data.wind_cdir_full).toBe('string');
    });
    test('wind dir should be number', async () => {
        expect(typeof data.wind_dir).toBe('number');
    });
    test('wind spd should be number', async () => {
        expect(typeof data.wind_spd).toBe('number');
    });
});

describe('Test is weatherAPI will use data set from geoAPI', () => {
    test('weather api should receive lat lon url, lat=35.7721&lon=-78.63861 ', async () => {
        let formInput = 'raleigh'
        let geoData = await geoAPI(formInput);
        let latlon = await returnLatLon(geoData);
        expect(latlon).toBe('lat=35.7721&lon=-78.63861');
    })
})
export const mockData = {
    city_name: "Raleigh",
    country_code: "US",
    data: [
        {
            app_max_temp: 14.1,
            app_min_temp: 1.2,
            clouds: 9,
            clouds_hi: 18,
            clouds_low: 0,
            clouds_mid: 5,
            datetime: "2023-01-06",
            dewpt: -1.2,
            high_temp: 14.1,
            low_temp: 2.4,
            max_dhi: null,
            max_temp: 14.1,
            min_temp: 4.9,
            moon_phase: 0.995177,
            moon_phase_lunation: 0.49,
            moonrise_ts: 1673041984,
            moonset_ts: 1673010861,
            ozone: 299.1,
            pop: 0,
            precip: 0,
            pres: 1009.3,
            rh: 51,
            slp: 1020.3,
            snow: 0,
            snow_depth: 0,
            sunrise_ts: 1673007885,
            sunset_ts: 1673043354,
            temp: 8.9,
            ts: 1672988460,
            uv: 3.2,
            valid_date: "2023-01-06",
            vis: 18.165,
            weather: {
                code: 801,
                icon: 'c02d',
                description: 'Few clouds'
            },
            wind_cdir: "W",
            wind_cdir_full: "west",
            wind_dir: 276,
            wind_gust_spd: 5.9,
            wind_spd: 3.1,
        }
    ]
};

describe('tests forecast API location', () => {
    test('city name should be Raleigh', async () => {
        expect(mockData.city_name).toBe('Raleigh');
    });
    test('country code should be US', async () => {
        expect(mockData.country_code).toBe('US');
    });
});

describe('tests forecast API data', () => {
    let data = mockData.data[0];
    test('app max temp should be a number', async () => {
        expect(typeof data.app_max_temp).toBe('number');
    });
    test('app min temp should be a number', async () => {
        expect(typeof data.app_min_temp).toBe('number');
    });
    test('clouds should be a number', async () => {
        expect(typeof data.clouds).toBe('number');
    });
    test('clouds hi should be a number', async () => {
        expect(typeof data.clouds_hi).toBe('number');
    });
    test('clouds low should be a number', async () => {
        expect(typeof data.clouds_low).toBe('number');
    });
    test('clouds mid should be a number', async () => {
        expect(typeof data.clouds_mid).toBe('number');
    });
    test('datetime should be a string', async () => {
        expect(typeof data.datetime).toBe('string');
    });
    test('dewpt should be a number', async () => {
        expect(typeof data.dewpt).toBe('number');
    });
    test('high temp should be a number', async () => {
        expect(typeof data.high_temp).toBe('number');
    });
    test('low temp should be a number', async () => {
        expect(typeof data.low_temp).toBe('number');
    });
    test('moon phase should be a number', async () => {
        expect(typeof data.moon_phase).toBe('number');
    });
    test('moon phase lunation should be a number', async () => {
        expect(typeof data.moon_phase_lunation).toBe('number');
    });
    test('moonrise ts should be a number', async () => {
        expect(typeof data.moonrise_ts).toBe('number');
    });
    test('moon set should be a number', async () => {
        expect(typeof data.moonset_ts).toBe('number');
    });
    test('ozone should be a number', async () => {
        expect(typeof data.ozone).toBe('number');
    });
    test('pop should be a number', async () => {
        expect(typeof data.pop).toBe('number');
    });
    test('precip should be a number', async () => {
        expect(typeof data.precip).toBe('number');
    });
    test('pres should be a number', async () => {
        expect(typeof data.pres).toBe('number');
    });
    test('rh should be a number', async () => {
        expect(typeof data.rh).toBe('number');
    });
    test('slp should be a number', async () => {
        expect(typeof data.slp).toBe('number');
    });
    test('snow should be a number', async () => {
        expect(typeof data.snow).toBe('number');
    });
    test('snow depth should be a number', async () => {
        expect(typeof data.snow_depth).toBe('number');
    });
    test('sunrise ts should be a number', async () => {
        expect(typeof data.sunrise_ts).toBe('number');
    });
    test('sunset ts should be a number', async () => {
        expect(typeof data.sunset_ts).toBe('number');
    });
    test('temp should be a number', async () => {
        expect(typeof data.temp).toBe('number');
    });
    test('ts should be a number', async () => {
        expect(typeof data.ts).toBe('number');
    });
    test('uv should be a number', async () => {
        expect(typeof data.uv).toBe('number');
    });
    test('valid date should be a string', async () => {
        expect(typeof data.valid_date).toBe('string');
    });
    test('vis should be a number', async () => {
        expect(typeof data.vis).toBe('number');
    });
    test('weather should be a object', async () => {
        expect(typeof data.weather).toBe('object');
    });

    let weatherData = data.weather;
    test('weather code should be a number', async () => {
        expect(typeof weatherData.code).toBe('number');
    });
    test('weather icon should be a string', async () => {
        expect(typeof weatherData.icon).toBe('string');
    });
    test('weather description should be a string', async () => {
        expect(typeof weatherData.description).toBe('string');
    });

    test('wind cdir should be a string', async () => {
        expect(typeof data.wind_cdir).toBe('string');
    });
    test('wind cdir full should be a string', async () => {
        expect(typeof data.wind_cdir_full).toBe('string');
    });
    test('wind dir  should be a number', async () => {
        expect(typeof data.wind_dir).toBe('number');
    });
    test('wind gust spd should be a number', async () => {
        expect(typeof data.wind_gust_spd).toBe('number');
    });
    test('wind spd should be a number', async () => {
        expect(typeof data.wind_spd).toBe('number');
    });
});
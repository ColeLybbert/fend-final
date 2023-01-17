export const mockData = {
  geonames: [
    {
      adminCode1: "ENG",
      adminCodes1: { ISO3166_2: "ENG" },
      adminName1: "England",
      countryCode: "GB",
      countryId: "2635167",
      countryName: "United Kingdom",
      fcl: "P",
      fclName: "city, village,...",
      fcode: "PPLC",
      fcodeName: "capital of a political entity",
      geonameId: 2643743,
      lat: "51.50853",
      lng: "-0.12574",
      name: "London",
      population: 8961989,
      toponymName: "London",
    },
  ],
};

describe('Test Pixle Api', function () {
    const data = mockData.geonames[0];
    test('admin code 1 should be string', async () => {
        expect(typeof data.adminCode1).toBe('string');
    });
    test('admin name 1 should be string', async () => {
        expect(typeof data.adminName1).toBe('string');
    });
    test('country code should be string', async () => {
        expect(typeof data.countryCode).toBe('string');
    });
    test('country id should be string', async () => {
        expect(typeof data.countryId).toBe('string');
    });
    test('country name should be string', async () => {
        expect(typeof data.countryName).toBe('string');
    });
    test('fcl should be string', async () => {
        expect(typeof data.fcl).toBe('string');
    });
    test('fcl name should be string', async () => {
        expect(typeof data.fclName).toBe('string');
    });
    test('f code should be string', async () => {
        expect(typeof data.fcode).toBe('string');
    });
    test('f code name should be string', async () => {
        expect(typeof data.fcodeName).toBe('string');
    });
    test('geo name id should be number', async () => {
        expect(typeof data.geonameId).toBe('number');
    });
    test('lat should be string', async () => {
        expect(typeof data.lat).toBe('string');
    });
    test('lng should be string', async () => {
        expect(typeof data.lng).toBe('string');
    });
    test('name should be string', async () => {
        expect(typeof data.name).toBe('string');
    });
    test('population should be number', async () => {
        expect(typeof data.population).toBe('number');
    });
    test('toponymName should be string', async () => {
        expect(typeof data.toponymName).toBe('string');
    });
})

const request = require("supertest");
const app = require("../../server/app");

describe("Test the root path", () => {
    test("It should responde to the post method", async () => {
        const response = await request(app).post("/apiData");
        expect(response.statusCode).toBe(500);
    })
})
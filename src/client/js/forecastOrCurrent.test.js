import { checkForDate } from "./checkForDate"

describe('Test if forecastOrCurrent will use data sent from checkForDate', () => {
    test(' forecastOrCurrent should receive false', async () => {
        let dateInput = new Date();
        let dateResponse = await checkForDate(dateInput);
        expect(dateResponse).toBe(false);
    })
})
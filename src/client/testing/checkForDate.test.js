import { checkForDate } from "../js/checkForDate";

describe('Test structure of checkForDate.js', () => {
    test('If checkForDate properly returns true if date is over a week', async () => {
        let dateInput = Date.now() + (1000 * 60 * 60 * 24 * 8)
        let checkForDateResponse = await checkForDate(dateInput)
        expect(checkForDateResponse).toBe(true);
    })
})
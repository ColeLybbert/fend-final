import { date } from "../../../mockJSEnv";
import { formInput } from "../../../mockJSEnv";

describe('Testing index.js variables', () => {
    test('Test if date input is a string', async () => {
        expect(typeof date).toBe('string');
    })
    test('Test if form input is a string', async () => {
        expect(typeof formInput).toBe('string');
    })
})
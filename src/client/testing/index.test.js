import { formDate } from "../../../mockJSEnv";
import { formInput } from "../../../mockJSEnv";

describe('Testing index.js variables', () => {
    test('Test if formDate input is a string', async () => {
        expect(typeof formDate).toBe('string');
    })
    test('Test if form input is a string', async () => {
        expect(typeof formInput).toBe('string');
    })
});

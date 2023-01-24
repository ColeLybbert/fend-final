import { formDate } from "../../../mockJSEnv";
import { secondConverter } from "../js/secondConverter";

describe('Function takes in any date that is a string and converts it to a number', () => {
    test('Should output 1673476898540', async () => {
        let output = await secondConverter(formDate);
        expect(output).toBe(1673476898540);
    })
});
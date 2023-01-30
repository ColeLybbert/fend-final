import { formInput } from "../../../mockJSEnv";
import { pixAPI } from "../js/pixFetch";

describe('Testing pixupdate', () => {
    test('Testing if pixupdate returns a img src', async () => {
        let output = await pixAPI(formInput);
        let picture = output.hits[0].previewURL;
        console.log(picture);
        expect(picture).toBe("https://cdn.pixabay.com/photo/2017/02/25/01/16/cityscape-2096731_150.jpg")
    })
})
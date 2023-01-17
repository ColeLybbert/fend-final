export const mockData = {
  hits: [
    {
      collections: 2022,
      comments: 245,
      downloads: 343632,
      id: 2295434,
      imageHeight: 3575,
      imageSize: 2938651,
      imageWidth: 5363,
      largeImageURL:"https://pixabay.com/get/g9018f9c4a76565205946b7b473d143f7b5d763050d28fdb1376250afc9cbc5f288f522792fe12728e0451bfe4936925301a0c4546fbc041eb7e084da225b6d57_1280.jpg",
      likes: 1961,
      pageURL:"https://pixabay.com/photos/spring-bird-bird-tit-spring-blue-2295434/",
      previewHeight: 99,
      previewURL:"https://cdn.pixabay.com/photo/2017/05/08/13/15/spring-bird-2295434_150.jpg",
      previewWidth: 150,
      tags: "spring bird, bird, tit",
      type: "photo",
      user: "JillWellington",
      userImageURL:"https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg",
      user_id: 334088,
      views: 601771,
      webformatHeight: 426,
      webformatURL:"https://pixabay.com/get/g8b91d821c7076a62060b62782b118c2301df884db0c1ca97f16136e912bfa7861b02c4e1ade8beeb7284961134e4b0f068f81d6f09f7c68d28c05c24c0dba51b_640.jpg",
      webformatWidth: 640,
    }
  ]
}
describe('Test Pixle Api', function () {
    const data = mockData.hits[0];
    test('collections should be number', async () => {
        expect(typeof data.collections).toBe('number');
    });
    test('comments should be number', async () => {
        expect(typeof data.comments).toBe('number');
    });
    test('downloads should be number', async () => {
        expect(typeof data.downloads).toBe('number');
    });
    test('id should be number', async () => {
        expect(typeof data.id).toBe('number');
    });
    test('image height should be number', async () => {
        expect(typeof data.imageHeight).toBe('number');
    });
    test('image size should be number', async () => {
        expect(typeof data.imageSize).toBe('number');
    });
    test('image width should be number', async () => {
        expect(typeof data.imageWidth).toBe('number');
    });
    test('large image url should be string', async () => {
        expect(typeof data.largeImageURL).toBe('string');
    });
    test('likes width should be number', async () => {
        expect(typeof data.likes).toBe('number');
    });
    test('page url should be string', async () => {
        expect(typeof data.pageURL).toBe('string');
    });
    test('preview height should be number', async () => {
        expect(typeof data.previewHeight).toBe('number');
    });
    test('preview url should be string', async () => {
        expect(typeof data.previewURL).toBe('string');
    });
    test('preview width should be number', async () => {
        expect(typeof data.previewWidth).toBe('number');
    });
    test('tags should be string', async () => {
        expect(typeof data.tags).toBe('string');
    });
    test('type should be string', async () => {
        expect(typeof data.type).toBe('string');
    });
    test('user should be string', async () => {
        expect(typeof data.user).toBe('string');
    });
    test('user images url should be string', async () => {
        expect(typeof data.userImageURL).toBe('string');
    });
    test('user id should be number', async () => {
        expect(typeof data.user_id).toBe('number');
    });
    test('views should be number', async () => {
        expect(typeof data.views).toBe('number');
    });
    test('web format height should be number', async () => {
        expect(typeof data.webformatHeight).toBe('number');
    });
    test('web format url should be string', async () => {
        expect(typeof data.webformatURL).toBe('string');
    });
    test('web format width should be number', async () => {
        expect(typeof data.webformatWidth).toBe('number');
    });
});

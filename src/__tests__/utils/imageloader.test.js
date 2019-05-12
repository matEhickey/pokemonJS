import ImageLoader from '../../utils/ImageLoader';

test('ImageLoader create a HTMLImageElement with same source', () => {
  const imgSource = 'img_mock_source';
  const img = ImageLoader.load(imgSource);
  expect(img.constructor.name).toBe('HTMLImageElement');
  expect(img.src).toBe(`http://localhost/${imgSource}`);
});

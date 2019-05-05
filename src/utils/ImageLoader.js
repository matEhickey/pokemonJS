// @flow

class ImageLoader {
  static load: (string) => HTMLImageElement;
}

ImageLoader.load = (img: string) => {
  const imgElem = document.createElement('img');
  imgElem.src = img;
  return imgElem;
};

export default ImageLoader;
